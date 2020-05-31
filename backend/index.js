const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares-Muestra las respuestas del servidor
app.use(morgan('dev'));
app.use(express.json());


// Routes of API
app.use('/api/alimentos' ,require('./routes/alimentos.routes'));


//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});
