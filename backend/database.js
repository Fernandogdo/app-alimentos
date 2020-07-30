const mongoose = require('mongoose');

//Connect DB
const URI = 'mongodb://localhost/alimentos'; //Se crea BD
//Base de datos en la nube   
//const URI = 'mongodb+srv://cj7:cj7@app-food-7qqkl.mongodb.net/alimentos?retryWrites=true&w=majority'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
