'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var pedidoSchema = new Schema({
	descripcion: {
		type: String,
		required: true
	},
	noPedido: {
		type: String,
		required: true
	},
	tiempoEstimado: {
		type: String,
		required: true
	},
	direccion: {
		type: String,
		required: true
	},
	barrio: {
		type: String,
		required: true
	},
	telefonoContacto: {
		type: String,
		required: true
	},
	pago: {
		type: String,
		required: true
	},
	valor: {
		type: String,
		required: true
	},
	fechaRecepcion: {
		type: Date,
		required: true,
		default: Date.now
	},
	horaSalida: {
		type: Date,
		default: Date.now
	},
	estado: {
		type: [{
			type: String,
			enum: ['Recibido', 'En Camino', 'Completado']
		}],
		default: ['Recibido']
	}
});

module.exports = mongoose.model('Pedido', pedidoSchema);
