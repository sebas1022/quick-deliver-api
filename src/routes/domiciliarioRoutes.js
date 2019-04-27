'use strict';

module.exports = function (app) {
    let Domiciliario = require('../controllers/DomiciliarioController');

    app.route('/domiciliario')
        .get(Domiciliario.listadoDomiciliario)
        .post(Domiciliario.crearDomiciliario)

    app.route('/domiciliario/:idDomiciliario')
        .get(Domiciliario.leerDomiciliario)
        .put(Domiciliario.actualizarDomiciliario)
        .delete(Domiciliario.borrarDomiciliario)
}
