const Alimento = require('../models/alimento');
const alimentoCtrl = {};

//Get Alimento
alimentoCtrl.getAlimentos = async (req, res) => {
    const alimentos = await Alimento.find();
    res.json(alimentos);
}

//Create Alimento
alimentoCtrl.creaAlimento = async (req, res) =>{
    const alimento = new Alimento(req.body);
    await alimento.save();
    res.json({status: 'Alimento saved'});
}

//Get One Alimento 
alimentoCtrl.getAlimento = async (req, res) => {
    const alimento = await Alimento.findById(req.params.id);
    res.json(alimento);
}

//Edit Alimento
alimentoCtrl.editAlimento= async (req, res) =>{
    const { id } = req.params;
    const alimento = {
        name: req.body.name,
        description: req.body.description
    }
    await Alimento.findByIdAndUpdate(id, {$set: alimento}, {new: true}); //Find data for id and update por alimento
    res.json({status: 'Alimento updated'});
}

//Delete Categoria
alimentoCtrl.deleteAlimento = async (req, res) =>{
    await Alimento.findByIdAndRemove(req.params.id);
    res.json({status: 'Alimento deleted'});
}

module.exports = alimentoCtrl;
