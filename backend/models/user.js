//Define schema of data
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false},
    isStaff: { type: Boolean, default: false},
    imagen: {type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);

