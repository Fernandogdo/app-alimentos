const bcrypt = require('bcrypt');
const Cliente = require('../models/cliente');
const token = require('../controllers/authentication.controller');
const clienteControler = {};

<<<<<<< HEAD
clienteControler.crearUsuario = async (req, res) =>{
    const User = {
        nombres : req.body.nombres,
        email   : req.body.email,
        usuario : req.body.usuario,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar  : req.body.avatar
    }
    
    var tokenUser = await token.generateToken(User);

    Cliente.create( User ).then( userDB => {
        
        res.json({
            access: true, 
            tokenUser
        })

    }).catch( err =>{
        res.json({
            access:false, 
=======
clienteControler.crearUsuario = async(req, res) => {
    const User = {
        nombres: req.body.nombres,
        email: req.body.email,
        usuario: req.body.usuario,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    }

    var tokenUser = await token.generateToken(User);

    Cliente.create(User).then(userDB => {

        res.json({
            access: true,
            tokenUser
        })

    }).catch(err => {
        res.json({
            access: false,
>>>>>>> fusionAlexFerna
            err
        })
    });
}

<<<<<<< HEAD
clienteControler.login = async (req, res) =>{
    
    const body = req.body
    var tokenUser = await token.generateToken(body);

    Cliente.findOne({ usuario: body.usuario}, (err, userDB) =>{
        if ( err ) throw err;

        if ( !userDB ) {
=======
clienteControler.login = async(req, res) => {

    const body = req.body
    var tokenUser = await token.generateToken(body);

    Cliente.findOne({ usuario: body.usuario }, (err, userDB) => {
        if (err) throw err;

        if (!userDB) {
>>>>>>> fusionAlexFerna
            return res.json({
                access: false,
                mensaje: 'Usuario/contraseña no son correctas'
            })
        }

<<<<<<< HEAD
        if (bcrypt.compareSync( body.password, userDB.password)) {
            
            res.status(200).json({
                access : true,
                token: tokenUser
            });
        }else{
=======
        if (bcrypt.compareSync(body.password, userDB.password)) {

            res.status(200).json({
                access: true,
                token: tokenUser
            });
        } else {
>>>>>>> fusionAlexFerna
            return res.status(400).json({
                access: false,
                mensaje: 'Usuario/contraseña no son correctas ***',
            });
        }
    })
}

clienteControler.actualizaUsuario = token.verifyToken, (req, res) => {
<<<<<<< HEAD
    
    
    
    const user =  {
        nombres : req.body.nombres,
        email   : req.body.email,
        avatar  : req.body.avatar
    }

    Cliente.findByIdAndUpdate( req.body._id, user, { new: true} , (err, userDB)=>{
        if ( !err ) throw err;

        if ( userDB ) {
=======



    const user = {
        nombres: req.body.nombres,
        email: req.body.email,
        avatar: req.body.avatar
    }

    Cliente.findByIdAndUpdate(req.body._id, user, { new: true }, (err, userDB) => {
        if (!err) throw err;

        if (userDB) {
>>>>>>> fusionAlexFerna
            return req.json({
                access: false,
                mensaje: "No existe un  usuario con ese ID "
            });
        } else {
            var tokenUser = token.generateToken(body);
            console.log.apply(tokenUser)
            res.json({
<<<<<<< HEAD
                access: true, 
                tokenUser
            })
        }   
=======
                access: true,
                tokenUser
            })
        }
>>>>>>> fusionAlexFerna
    })

    req.json({
        access: true,
        usuario: req.usuario
    })
}
<<<<<<< HEAD
module.exports = clienteControler;  
=======
module.exports = clienteControler;
>>>>>>> fusionAlexFerna
