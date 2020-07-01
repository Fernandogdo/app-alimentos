const mongoose = require('mongoose');

//Connect DB
const URI = 'mongodb://localhost/alimentos'; //Se crea BD
<<<<<<< HEAD
//cambios para la rama desarrollo
mongoose.connect(URI, { useNewUrlParser: true })
=======
//Base de datos en la nube   

//const URI = 'mongodb+srv://cj7:cj7@app-food-7qqkl.mongodb.net/alimentos?retryWrites=true&w=majority';
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
>>>>>>> new-feature
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err));

// mongoose.connect(URI)
//     .then(db => console.log('DB igits connected'))
//     .catch(err=> console.error(err));

module.exports = mongoose;

//Rama para Axel