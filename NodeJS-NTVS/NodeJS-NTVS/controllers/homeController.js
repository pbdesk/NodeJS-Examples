(function (homeController) {
    
    homeController.init = function (app) { 

        app.get('/', function (req, res) {
            res.render('index', { title: "Demo Title" });
        });

    };
    

})(module.exports);