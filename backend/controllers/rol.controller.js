const Rol = require('../models/rol');
const rolCtrl = {};

rolCtrl.getRoles = async (req, res) => {
    const roles = await Rol.find();
    res.json(roles);
}

rolCtrl.getRol = async (req, res) => {
    const rol = await Rol.findById(req.params.id);
    res.json(rol);
}

rolCtrl.createRol = async (req, res) => {
    var body = req.body;
    // instancia de rol
    var rol = new Rol({
        name: body.name,
        description: body.description,
    });

    await rol.save((err, rolDB) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                mensaje: "Error al registrar el rol",
                errors: err,
            });
        }
        res.status(200).json({
            ok: true,
            //rol: rolDB,
        });
    });
}

module.exports = rolCtrl;