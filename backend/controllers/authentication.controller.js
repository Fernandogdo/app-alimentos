const User = require('../models/user');
var jwt = require('jsonwebtoken');

const authCtrl = {};
var secretK = '@dev-ingweb@-@utpl-@2020';

authCtrl.verifyToken = async (req, res, next) => {
    //const token = req.token;
    var token = req.headers.authorization;
    if (!token) {
        return res.status(400).json({
            error: "Es necesario el token de autenticación"
        });

    }
    //console.log("skkkkkkkkkk " + token);
    const tok = token.split(' ')[1];

    //console.log("sddddddddddd " + tok);
    if (tok === '') {
        return res.status(401).send('Petición no autorizada');
    }

    const payload = await jwt.verify(tok, secretK);

    if (!payload) {
        return res.status(401).send('Petición no autorizada');
    }
    console.log(JSON.stringify(payload));
    console.log(JSON.stringify(payload.objtaken._id));

    next();
}


authCtrl.generateToken = async (req, res) => {
    const objtaken = req;
    console.log("jjjjjjj" + objtaken);
    const token = await jwt.sign({ objtaken }, secretK);

    return token;
}


module.exports = authCtrl;