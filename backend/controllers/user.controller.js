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
    if (req.imagen === undefined) {
        req.imagen = null
    }

    var user = new User({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
        isAdmin: body.isAdmin,
        isStaff: body.isStaff,
        imagen: req.imagen
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

userCtrl.checkuserCreated = async  (req, res) =>  {
    const username = req.params.id;
    console.log(username)
     const userDB = await User.findOne({ username: username });

        if (!userDB) {
            return res.status(200).json({
                username: "",
            });
        }

        if (userDB) {
            return res.status(200).json({
                username: userDB.username,
                
               
            });
        }

}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    var body = req.body;
    // instancia de usuario
    var admin = false;
    var staff = false;

    objTransformed = JSON.parse(JSON.stringify(body));

    const userS = await User.findById(req.params.id);

    var newpass;
    if (body.password != userS.password) {
        newpass = bcrypt.hashSync(body.password, 10);
    }else{
        newpass = userS.password
    }
    // console.log(userS)
    // console.log("Url ", req.imagen)
    // console.log("Url2 ", userS.imagen)

    if (req.imagen === undefined) {
        req.imagen = userS.imagen
    }

    if (!objTransformed.hasOwnProperty('isAdmin')) {
        admin = userS.isAdmin;
    }
    if (!objTransformed.hasOwnProperty('isStaff')) {
        staff = userS.isStaff;
    }

    if (objTransformed.hasOwnProperty('isStaff') && objTransformed.isAdmin != userS.isAdmin) {
        admin = objTransformed.isAdmin;
    } else {
        admin = userS.isAdmin
    }
    if (objTransformed.hasOwnProperty('isStaff') && objTransformed.isStaff != userS.isStaff) {
        staff = objTransformed.isStaff;
    } else {
        staff = userS.isStaff;
    }

    var user = {
        name: objTransformed.name,
        lastname: objTransformed.lastname,
        email: objTransformed.email,
        username: objTransformed.username,
        password: newpass,
        isAdmin: admin,
        isStaff: staff,
        imagen: req.imagen,
    }
    await User.findByIdAndUpdate(id, { $set: user }, { useFindAndModify: false }); //Find data for id and update
    res.status(200).json({ status: 'User updated' });

}

//Delete User
userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'User deleted' });
}

module.exports = userCtrl;

