'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioAppSchema = new Schema({
	usuario: {
		type: String,
		required: true
	},
	contrasena: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	fechaRegistro: {
		type: Date,
		default: Date.now
    },
    fechaActualizacion: {
		type: Date,
		default: Date.now
	},
	activo: {
		type: Boolean,
		enum: [true, false],
		default: true
	}
});

module.exports = mongoose.model('usuario', usuarioAppSchema);
