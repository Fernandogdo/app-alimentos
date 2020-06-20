const bcrypt = require("bcrypt");
const User = require('../models/user');
var jwt = require('jsonwebtoken');
const auth = require('../controllers/authentication.controller');
const { token } = require("morgan");

const loginCtrl = {};


loginCtrl.checkwebLogininfo = async  (req, res) =>  {
    const username = req.body.username;
    const password = req.body.password;

     const userDB = await User.findOne({ username: username });

        if (!userDB) {
            return res.status(400).json({
                access: false,
                mensaje: "El usuario o password ingresados no son correctos.",
               
            });
        }
        if (!bcrypt.compareSync(password, userDB.password)) {
            return res.status(400).json({
                access: false,
                mensaje: "El usuario o password ingresados no son correctos.",
                
            });

        }

        if(!userDB.isAdmin == true || !userDB.isStaff == true){
            return res.status(200).json({
                web_access : false,
                mob_access : true,
                mensaje: "No cuenta con acceso para acceder a la web.",
                usuario: userDB
              
            });
        }else{
            var token = await auth.generateToken(userDB);
            //var token = jwt.sign({_id : userDB._id }, '@dev-ingweb@-@utpl-@2020');
            return res.status(200).json({
                web_access : true,
                mob_access : true,
                usuario: userDB,
                token: token
            });
        }
}

module.exports = loginCtrl;