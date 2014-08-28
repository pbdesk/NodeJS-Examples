var mongoose = require('mongoose');
var FeedType = require('./FeedType');
var Schema = mongoose.Schema;

var FeedSourceSchema = new Schema({
    name: String,
    url: {
        type: String,
        required: true,
        index: true
    },
    tags: { type: [String], index: true },
    feedType: {
        type: Schema.ObjectId,
        ref: 'FeedType'
    },
    isActive: {type: Boolean, default: true}
}, { collection: 'FeedSources' });

/*
 * feedtype
 * 1 - Simple No Image
 * 
 */
FeedSourceSchema.statics.findByUrl = function(url, cb){
    var fs= this || mongoose.model('FeedSource');
    fs.findOne({ url : url }, function (err, item){
        if(err){
            cb(err, null);
        }
        else if (item){
            cb(null, item);
        }
        else {
            cb(null, null);
        }
    });
};

FeedSourceSchema.statics.insOrUpd = function(fSource, cb){
    var fs= this || mongoose.model('FeedSource');

        fs.findOne({url: fSource.url}, function(err, item){
            if(err){
                throw new Error("Error in findById");
            }
            else
            if(item){
                fSource._id = item._id;
                fs.update1(fSource, cb);
            }
            else{
                fs.insert(fSource, cb);
            }

        });

}

FeedSourceSchema.statics.insert = function(fSource, cb){
    fSource.save(function (err1, item1, numberAffected) {
        if (err1) {
            console.log("error while inserting");
            cb(err1);
        }
        else {
            console.log('record inserted. numberAffected: ' + numberAffected);
            cb(null, item1, numberAffected, "insert");
        }
    });
}

FeedSourceSchema.statics.update1 = function(fSource, cb){
    var fs= this || mongoose.model('FeedSource');
    if(fSource._id){
       fs.findById(fSource._id, function(err, item){
           if(err){
               throw new Error("fsource not found");
           }
           else if(item){
               if(item.url === fSource.url){
                    fSource.tags = CombineTags(fSource.tags, item.tags);
                    var id = fSource._id;
                    delete  fSource._id;
                   fs.update({_id: id}, fSource, function(err, obj){
                       if(err){
                           throw new Error("Error while updating");
                       }
                   } );

                    /*fs.findByIdAndUpdate(fSource._id, fSource,function(err, obj){
                        if(err){
                            throw new Error("Error while updating");
                        }
                    } );*/
               }
           }

       });
    }

}

function CombineTags(a1, a2)
{
   return  RemoveDuplicatesFromArray(a1.concat(a2));
}
function RemoveDuplicatesFromArray(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

module.exports = mongoose.model('FeedSource', FeedSourceSchema);