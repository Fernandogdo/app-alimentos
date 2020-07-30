const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')

const { mongoose } = require('./database');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares-Muestra las respuestas del servidor
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// Routes of API
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/roles', require('./routes/roles.routes'));
app.use('/api/login', require('./routes/login.routes'));
app.use('/api/categorias', require('./routes/categorias.routes'));
app.use('/api/subcategorias', require('./routes/subcategoria.routes'))
app.use('/user', require('./routes/cliente.routes'))
<<<<<<< HEAD
// app.use('/api/alimento', require(''));
=======
    // app.use('/api/alimento', require(''));
>>>>>>> fusionAlexFerna

app.use('/api/alimentos', require('./routes/alimentos.routes'));

//Folder for public files

app.use('/backend/uploads', express.static('backend/uploads'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});