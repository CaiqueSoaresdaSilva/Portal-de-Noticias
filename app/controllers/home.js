module.exports.index = function(application, req, res){

    var conn = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);
    
    noticiasModel.getUltimasNoticias(function(error, result){
        console.log(result);
        res.render("home/index", {noticias : result});
    });

}