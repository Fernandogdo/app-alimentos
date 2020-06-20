const mongoose = require('mongoose');

//Connect DB
const URI = 'mongodb://localhost/alimentos'; //Se crea BD
//cambios para la rama desarrollo
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err));

// mongoose.connect(URI)
//     .then(db => console.log('DB is connected'))
//     .catch(err=> console.error(err));

module.exports = mongoose;

//Rama para Axel