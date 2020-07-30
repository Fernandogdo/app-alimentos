const User = require('../models/user');
var jwt = require('jsonwebtoken');

const authCtrl = {};
var secretK = '@dev-ingweb@-@utpl-@2020';

authCtrl.verifyToken = async (req, res, next) => {
    //const token = req.token;
    var token = req.headers.authorization;
    if (!token) {
        return res.status(400).json({
            error: "Es necesario un token de autenticación"
        });

    }
    //divide la cabezera authorization
    const tok = token.split(' ')[1];
    if (tok === '') {
        return res.status(401).send('Token vacio');
    }
    //verifica el token 
    try {
        const payload = await jwt.verify(tok, secretK);
        if (!payload) {
            return res.status(401).send('Token invalido');
        }
        req.taken = payload.objtaken;
        console.log(JSON.stringify(payload));
        console.log(JSON.stringify(payload.objtaken._id));

        next();
    } catch (error) {
        return res.status(401).send(error);
    }
}

authCtrl.validateRol_User = async (req, res, next) => {
    const user = req.taken;
    var manejo = req.originalUrl.includes('users');

    if (!user.isAdmin == true && !user.isStaff == true) {
        return res.status(401).json({
            ok: false,
            error: 'No es un usuario autorizado -> acción no permitida.',
        });
    }
    if (!user.isAdmin == true && manejo == true) {
        console.log('estado', user.isAdmin);
        return res.status(401).json({
            ok: false,
            error: 'No es un usuario autorizado para esta acción.',
        });
    }

    next();
}

authCtrl.generateToken = async (req, res) => {
    const objtaken = req;
<<<<<<< HEAD
=======
    //console.log("jjjjjjj" + objtaken);
>>>>>>> fusionAlexFerna
    const token = await jwt.sign({ objtaken }, secretK);
    return token;
}


module.exports = authCtrl;