const SubCategoria = require('../models/subcategoria');
const subcategoriaCtrl = {};

subcategoriaCtrl.getsubCategorias = async (req, res) => {
    const subcategorias = await SubCategoria.find();
    res.json(subcategorias);
}

// alimentoCtrl.getAlimentos = async (req, res) => {
//     const alimentos = await Alimento.find();
//     res.json(alimentos);
// }

subcategoriaCtrl.createSubCategoria = async (req, res) =>{
    const subcategoria = new SubCategoria({
        name: req.body.name,
        categoria: req.body.categoria
    });
    await subcategoria.save();
    res.json({
        status: 'SubCategoria saved'
    });
}

//Get One Aliment
subcategoriaCtrl.getsubCategoria = async (req, res) => {
    const subcategoria = await SubCategoria.findById(req.params.id);
    res.json(subcategoria);
}


// categoriaCtrl.editsubCategoria= async (req, res) =>{
//     const { id } = req.params;
//     const subcategoria = {
//         name: req.body.name,
//         description: req.body.description
//     }
//     await Categoria.findByIdAndUpdate(id, {$set: categoria}, {new: true}); //Find data for id and update por alimento
//     res.json({status: 'Categoria updated'});
// }

subcategoriaCtrl.editsubCategoria= async (req, res) =>{
    const { id } = req.params;
    const subcategoria = {
        name: req.body.name
    }
    await SubCategoria.findByIdAndUpdate(id, {$set: subcategoria}, {new: true}); //Find data for id and update por alimento
    res.json({status: 'SubCategoria updated'});
}

subcategoriaCtrl.deletesubCategoria = async (req, res) =>{
    await SubCategoria.findByIdAndRemove(req.params.id);
    res.json({status: 'SubCategoria deleted'});
}

subcategoriaCtrl.seleccionaSubcategoria = async (req, res) => {
    const categoriaa = req.params.id;

    const aaa = await SubCategoria.find({ categoria: categoriaa});
    res.json(aaa);
}

module.exports = subcategoriaCtrl;

// creación de rama personal 
//2020