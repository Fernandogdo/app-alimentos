const mongoose = require('mongoose');

//Connect DB
<<<<<<< HEAD
const URI = 'mongodb://localhost/alimentos'; //Se crea BD

mongoose.connect(URI, { useNewUrlParser: true })
=======
//const URI = 'mongodb+srv://cj7:<cj7>@app-food-7qqkl.mongodb.net/test'; //Se crea BD
//Base de datos en la nube
const URI = 'mongodb+srv://cj7:cj7@app-food-7qqkl.mongodb.net/alimentos?retryWrites=true&w=majority';
mongoose.connect(URI)
>>>>>>> 385dbdc2bead4140c4d2187d5aa820c6682143a3
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err));

// mongoose.connect(URI)
//     .then(db => console.log('DB is connected'))
//     .catch(err=> console.error(err));

module.exports = mongoose;