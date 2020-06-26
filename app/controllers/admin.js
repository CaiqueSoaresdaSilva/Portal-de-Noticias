module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia",  {validacao : {}, noticia : {}});
}
 
module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;

    req.assert('titulo','O titulo é obrigatório').notEmpty();
    req.assert('resumo','O resumo da noticia é obrigatório').notEmpty();
    req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','O nome do autor é obrigatório').notEmpty();
    req.assert('data_noticia','A data da noticia é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','A noticia é obrigatória').notEmpty();

    var erros = req.validationErrors();
    
    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia});
        console.log(erros);
        return;
    }

    var conn = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticias(noticia, function(error, result){
            res.redirect("/noticias");
    });
}