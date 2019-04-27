'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var domiciliarioSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	telefono: {
		type: String,
		required: true
	},
	fechaRegistro: {
		type: Date,
		default: Date.now
	},
	activo: {
		type: Boolean,
		enum: [true, false],
		default: true
	}
});

module.exports = mongoose.model('domiciliario', domiciliarioSchema);
