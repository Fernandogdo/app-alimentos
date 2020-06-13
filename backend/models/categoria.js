//Define schema of data
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
});

module.exports = mongoose.model('Categoria', CategoriaSchema);

