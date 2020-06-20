//Define schema of data
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: false},
});

module.exports = mongoose.model('Rol', RolSchema);

