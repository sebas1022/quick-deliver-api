'use strict';

var mongoose = require('mongoose'),
    Pedido = mongoose.model('Pedido');

function listado(req, res) {
    Pedido.find({}, function(err, pedido) {
        if (err) {
            res.send(err);
        }
        res.json(pedido);
    });
}

function crearPedido(req, res){
    var nuevoPedido = new Pedido(req.body);
    nuevoPedido.save(function(err, pedido) {
        if (err) {
            res.send(err);
        }
        res.json(pedido);
    });
}

function leerPedido(req, res) {
    Pedido.findById(req.params.idPedido, function(err, pedido) {
        if (err){
            res.send(err);
        }
        res.json(pedido);
    });
}

function actualizarPedido(req, res) {
    Pedido.findOneAndUpdate({_id: req.params.idPedido}, req.body, {new: true}, function(err, pedido) {
        if (err)
          res.send(err);
        res.json(pedido);
    });
}

function borrarPedido(req, res) {
    Pedido.remove({
        _id: req.params.idPedido
    }, function(err, pedido) {
        if (err) {
            res.send(err);            
        }
        res.json({ message: 'pedido successfully deleted' });
    });
}


/** Exports */
exports.listado = listado;
exports.crearPedido = crearPedido;
exports.leerPedido = leerPedido;
exports.actualizarPedido = actualizarPedido;
exports.borrarPedido = borrarPedido;
