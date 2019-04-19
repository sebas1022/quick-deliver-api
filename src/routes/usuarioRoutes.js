'use strict';

module.exports = function(app) {
    let Usuario = require('../controllers/UsuarioController');

    app.route('/Usuario')
        .get(Usuario.listadoUsuarioApp)
        .post(Usuario.crearUsuarioApp)
    
    app.route('/Usuario/:idUsuario')
        .get(Usuario.leerUsuarioApp)
        .put(Usuario.actualizarUsuarioApp)
        .delete(Usuario.borrarUsuarioApp)
    
    app.route('/login')
        .post(Usuario.loginUsuarioApp)
}
