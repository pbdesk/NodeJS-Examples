var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FeedTypeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: String
}, { collection: 'FeedTypes' });

/*UserSchema.methods.findSameName = function(cb) {
    // 'this' will be a User instance, or document
    return this.model('User').find({name: this.name}, cb);
};*/
/*UserSchema.statics.findByEmail = function(email, cb) {
    var User = this || mongoose.model('User');
    User.findOne({email: email}, cb);
};*/

FeedTypeSchema.statics.findByName = function(nm, cb){
   var ft = this || mongoose.model('FeedType');
    ft.findOne({ name : nm }, function (err, item){
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

FeedTypeSchema.statics.insert = function(fType, cb){
    var ft = this || mongoose.model('FeedType');
    if(fType) {
        ft.findByName(fType.name, function (err, item) {
            if (err) {
                cb(err);
            }
            else {
                if (item) {
                    //ToDo - update record
                    cb(null, item, 1, "update");
                }
                else {
                    //Insert Record
                    fType.save(function (err1, item1, numberAffected) {
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
            }
        });
    }
}
/*
FeedTypeSchema.statics.update = function(fType, cb){

}*/

/*FeedTypeSchema.methods.insert = function(cb){
    var ft = mongoose.model('FeedType');
    ft.findByName(this.name, function(err, item){
        if(err){
            cb(err);
        }
        else{
            if(item){
                //ToDo - update record
                cb(null, item, 1, "update");
            }
            else {
                //Insert Record
                this.save(function (err1,item1, numberAffected) {
                    if (err1) {
                        console.log("error while inserting");
                        cb(err1);
                    }
                    else{
                        console.log('record inserted. numberAffected: ' + numberAffected);
                        cb(null, item1, numberAffected, "insert");
                    }
                });
            }
        }
    });
};*/

module.exports = mongoose.model('FeedType', FeedTypeSchema);


