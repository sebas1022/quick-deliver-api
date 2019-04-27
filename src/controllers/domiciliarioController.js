'use strict';

var mongoose = require('mongoose'),
    Domiciliario = mongoose.model('domiciliario'),
    md5 = require("blueimp-md5");

function listadoDomiciliario(req, res) {
    Domiciliario.find({}, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function crearDomiciliario(req, res) {
    var nuevoDomiciliario = new Domiciliario(req.body);
    nuevoDomiciliario.save(function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function leerDomiciliario(req, res) {
    Domiciliario.findById(req.params.idDomiciliario, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function actualizarDomiciliario(req, res) {
    Domiciliario.findOneAndUpdate({ _id: req.params.idDomiciliario }, req.body, { new: true }, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}

function borrarDomiciliario(req, res) {
    Domiciliario.remove({
        _id: req.params.idDomiciliario
    }, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'user successfully deleted' });
    });
}

function loginDomiciliario(req, res) {
    Domiciliario.find({ Domiciliario: req.body.Domiciliario, contrasena: md5(req.body.password) }, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json(us);
    });
}
/** Exports */
exports.listadoDomiciliario = listadoDomiciliario;
exports.crearDomiciliario = crearDomiciliario;
exports.leerDomiciliario = leerDomiciliario;
exports.loginDomiciliario = loginDomiciliario;
exports.actualizarDomiciliario = actualizarDomiciliario;
exports.borrarDomiciliario = borrarDomiciliario;
