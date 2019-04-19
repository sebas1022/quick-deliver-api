'use strict';

var mongoose = require('mongoose'),
    utils = require('../utills/utils'),
    UsuarioApp = mongoose.model('usuarioApp');

function listadoUsuarioApp(req, res) {
    UsuarioApp.find({}, function(err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function crearUsuarioApp(req, res){
    var nuevoUsuarioApp = new UsuarioApp(req.body);
    nuevoUsuarioApp.save(function(err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function leerUsuarioApp(req, res) {
    UsuarioApp.findById(req.params.idUsuarioApp, function(err, us) {
        if (err){
            res.send(err);
        }
        res.json(us);
    });
}

function actualizarUsuarioApp(req, res) {
    UsuarioApp.findOneAndUpdate({_id: req.params.idUsuarioApp}, req.body, {new: true}, function(err, us) {
        if (err) {
          res.send(err);
        }
        res.json(us);
    });
}

function borrarUsuarioApp(req, res) {
    UsuarioApp.remove({
        _id: req.params.idUsuarioApp
    }, function(err, us) {
        if (err) {
            res.send(err);            
        }
        res.json({ message: 'user successfully deleted' });
    });
}

function loginUsuarioApp(req, res) {
    UsuarioApp.find({ usuarioApp: req.params.user, contrasena: utils.MD5(req.params.password)}, function(err, us) {
        if (err){
            res.send(err);
        }
        res.json(us);
    });
}
/** Exports */
exports.listadoUsuarioApp = listadoUsuarioApp;
exports.crearUsuarioApp = crearUsuarioApp;
exports.leerUsuarioApp = leerUsuarioApp;
exports.loginUsuarioApp = loginUsuarioApp;
exports.actualizarUsuarioApp = actualizarUsuarioApp;
exports.borrarUsuarioApp = borrarUsuarioApp;
