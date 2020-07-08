//Define schema of data
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    name: { type: String, required: false},
    description: { type: String, required: false},
    imagen: { type: String, required: false}
});

module.exports = mongoose.model('Categoria', CategoriaSchema);

