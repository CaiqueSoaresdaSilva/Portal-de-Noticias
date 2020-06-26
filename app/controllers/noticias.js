module.exports.noticias = function(application, req, res){
    var conn = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias(function(error, result){
             res.render("noticias/noticias", {noticias : result});
    });
} 

module.exports.noticia = function(application, req, res){
    var conn = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(conn);

    var id_noticia = req.query;
    console.log(req.query);

    noticiaModel.getNoticia(id_noticia, function(error, result){
        res.render("noticias/noticia", {noticia : result});
    });
}