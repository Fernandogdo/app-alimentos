const Alimento = require('../models/alimento');
const alimentoCtrl = {};

alimentoCtrl.getAlimentos = async (req, res) => {
    const alimentos = await Alimento.find();
    res.json(alimentos);
}

alimentoCtrl.createAlimento = async (req, res) =>{
    const alimento = new Alimento(req.body);
    await alimento.save();
    res.json({
        status: 'Alimento saved'
    });
}

//Get One Aliment
alimentoCtrl.getAlimento = async (req, res) => {
    const alimento = await Alimento.findById(req.params.id);
    res.json(alimento);
}

alimentoCtrl.editAlimento= async (req, res) =>{
    const { id } = req.params;
    const alimento = {
        name: req.body.name,
        location: req.body.location,
        category: req.body.category,
        description: req.body.description
    }
    Alimento.findByIdAndUpdate(id, {$set: alimento}, {new: true}); //Find data for id and update por alimento
    res.json({status: 'Alimento updated'});
}

alimentoCtrl.deleteAlimento = function (){

}

module.exports = alimentoCtrl;