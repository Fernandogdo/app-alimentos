//Define schema of data
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombres: { type: String, required: true },
    email: { type: String, required: true },
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false }
});


module.exports = mongoose.model('Cliente', ClienteSchema);