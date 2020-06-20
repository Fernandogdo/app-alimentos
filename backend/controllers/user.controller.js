const User = require('../models/user');
const bcrypt = require('bcrypt');
const userCtrl = {};
const auth = require('../controllers/authentication.controller');
var jwt = require('jsonwebtoken');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.createUser = async (req, res) => {
    var body = req.body;
    // instancia de usuario
    var user = new User({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
        isAdmin: body.isAdmin,
        isStaff: body.isStaff,
        //rol: body.rol
        //img: body.img,
    });

    await user.save((err, userDB) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                mensaje: "Error al registrar usuario",
                errors: err,
            });
        }
        res.status(200).json({
            ok: true,
            //usuario: userDB,
        });
    });


}

userCtrl.editUser = async (req, res) => {
    var body = this.getUser(req);
    // instancia de usuario
    var user = new User({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
        isAdmin: body.isAdmin,
        isStaff: body.isStaff,
        //rol: body.rol
        //img: body.img,
    });

    await user.save((err, userDB) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                mensaje: "Error al registrar usuario",
                errors: err,
            });
        }
        res.status(200).json({
            ok: true,
            //usuario: userDB,
        });
    });


}

module.exports = userCtrl;

