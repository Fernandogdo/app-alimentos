//Define schema of data
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SubCategoria = mongoose.model('SubCategoria');

const AlimentoSchema = new Schema({
    autor: { type: String, required: true},
    fecha: { type: String, required: true},
    categoria: { type: String, required: true},
    nombre_comun: {type: String, required: true},
    nombre_cientifico: {type: String, required: true},
    otro_nombre: {type: String, required: true},
    origen: {type: String, required: true},
    conservacion_alimento: {type: String, required: true},
    description: { type: String, required: true},
    temporada: {type: String, required: true},
    presentacion: {type: String, required: true},
    unidades: {type: String, required: true},
    mercado: {type: String, required: true},
    supermercado: {type: String, required: true},
    kilocalorias: {type: String, required: true},
    glucidos: {type: String, required: true},
    proteinas: {type: String, required: true},
    // imagePath: {type: String, required: true},
    subcategoria: { type: Schema.ObjectId, ref:"SubCategoria", required: true}
});

module.exports = mongoose.model('Alimento', AlimentoSchema);