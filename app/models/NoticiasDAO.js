function NoticiasDAO(conn){
    this._conn = conn;
};

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id_noticia);
    this._conn.query('select * from noticias where id_noticia = ?', id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticias = function(noticia, callback){
    console.log(noticia);
    this._conn.query('insert into noticias set ?', noticia, callback);
};

NoticiasDAO.prototype.getUltimasNoticias = function(callback){
    this._conn.query('select * from noticias order by data_criacao desc limit 5', callback)
};

module.exports = function(){
   return NoticiasDAO;
};