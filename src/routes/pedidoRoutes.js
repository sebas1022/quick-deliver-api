'use strict';

module.exports = function (app) {
    let pedido = require('../controllers/pedidoController');

    app.route('/pedido')
        .get(pedido.listado)
        .post(pedido.crearPedido)
    
    app.route('/pedido/:idPedido')
        .get(pedido.leerPedido)
        .put(pedido.actualizarPedido)
        .delete(pedido.borrarPedido)
}
