const mongoose = require('mongoose');

//Connect DB
const URI = 'mongodb://localhost/alimentos'; //Se crea BD
//Base de datos en la nube   

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err));



module.exports = mongoose;

//Rama para Axel