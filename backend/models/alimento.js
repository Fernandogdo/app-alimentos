//Define schema of data
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlimentoSchema = new Schema({
    name: { type: String, required: true},
    location: { type: String, required: true},
    category: { type: String, required: true},
    description: { type: String, required: true}
});

module.exports = mongoose.model('Alimento', AlimentoSchema);

