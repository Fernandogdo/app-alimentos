const mongoose = require('mongoose');

//Connect DB
const URI = 'mongodb://localhost/alimentos'; //Se crea BD

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err));

// mongoose.connect(URI)
//     .then(db => console.log('DB is connected'))
//     .catch(err=> console.error(err));

// module.exports = mongoose;