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
    
    console.log('tutttttt ', req.imagen);
    // var user = new User({
    //     name: body.name,
    //     lastname: body.lastname,
    //     email: body.email,
    //     username: body.username,
    //     password: bcrypt.hashSync(body.password, 10),
    //     isAdmin: body.isAdmin,
    //     isStaff: body.isStaff,
    //     imagen: req.imagen
    // });

    // await user.save((err, userDB) => {
    //     if (err) {
    //         return res.status(404).json({
    //             ok: false,
    //             mensaje: "Error al registrar usuario",
    //             errors: err,
    //         });
    //     }
    //     res.status(200).json({
    //         ok: true,
    //         //usuario: userDB,
    //     });
    // });
}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    var body = req.body;
    // instancia de usuario
    var admin = false;
    var staff = false;
    console.log("Hostia ",body)  
    

    objTransformed = JSON.parse(JSON.stringify(body));
    console.log("Pendejo",objTransformed ) 
    const userS = await User.findById(req.params.id);
    // if (!bcrypt.compareSync(body.password, userS.password)) {
        console.log(userS)  
    // }
    if (!objTransformed.hasOwnProperty('isAdmin')) {
        console.log("1");
        admin = userS.isAdmin;
    }
    if (!objTransformed.hasOwnProperty('isStaff')) {
        console.log("2");
        staff = userS.isStaff;
    }

    if (objTransformed.hasOwnProperty('isStaff') && objTransformed.isAdmin != userS.isAdmin) {
        console.log("3");
        admin = objTransformed.isAdmin;
    }else{
        console.log("4");
        admin = userS.isAdmin
    }
    if (objTransformed.hasOwnProperty('isStaff') && objTransformed.isStaff != userS.isStaff) {
        console.log("5");
        staff = objTransformed.isStaff;
    }else{
        console.log("6");
        staff = userS.isStaff;
    }
    console.log("Prewiew ", body.name)  
    console.log("Prewiew ", body.username)  
    console.log("Prewiew ", body.password)  
    var user = {
        name: objTransformed.name,
        lastname: objTransformed.lastname,
        email: objTransformed.email,
        username: objTransformed.username,
        password: bcrypt.hashSync(objTransformed.password, 10),
        isAdmin: admin,
        isStaff: staff,
        imagen: req.imagen,
    }
    await User.findByIdAndUpdate(id, {$set: user}, {useFindAndModify: false}); //Find data for id and update
    res.status(200).json({status: 'User updated'});

}

//Delete User
userCtrl.deleteUser = async (req, res) =>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User deleted'});
}

module.exports = userCtrl;

