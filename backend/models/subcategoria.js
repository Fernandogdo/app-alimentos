//Define schema of data
'use strict'
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
// const { Schema } = mongoose;
var Categoria = mongoose.model('Categoria');


const subCategoriaSchema = new Schema({
    name: { type: String, required: true},
    categoria: { type: Schema.ObjectId, ref:"Categoria", required: true}
});

module.exports = mongoose.model('SubCategoria', subCategoriaSchema);

