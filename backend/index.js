const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares-Muestra las respuestas del servidor
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


// Routes of API
app.use('/api/categorias' ,require('./routes/categorias.routes'));
app.use('/api/subcategorias', require('./routes/subcategoria.routes'))
// app.use('/api/alimento', require(''));

app.use('/api/alimentos', require('./routes/alimentos.routes'));
//Folder for public files
// app.use('/uploads', express.static(path.resolve('uploads')));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});
