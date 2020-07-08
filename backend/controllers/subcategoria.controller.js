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

subcategoriaCtrl.createSubCategoria = async (req, res) => {
    if (req.imagen === undefined) { 
        req.imagen = null 
    } 

    const subcategoria = new SubCategoria({
        name: req.body.name,
        categoria: req.body.categoria,
        imagen: req.imagen
    });
    await subcategoria.save();
    res.json({ status: 'SubCategoria saved' });
}

//Get One Aliment
subcategoriaCtrl.getsubCategoria = async (req, res) => {
    const subcategoria = await SubCategoria.findById(req.params.id);
    res.json(subcategoria);
}

// categoriaCtrl.editCategoria = async (req, res) => {
//     const { id } = req.params;
    
//     const categoriaIMG = await Categoria.findById(req.params.id);

//     if (req.imagen === undefined) { 
//         req.imagen = categoriaIMG.imagen
//     } 

//     const categoria = {
//         name: req.body.name,
//         description: req.body.description,
//         imagen: req.imagen
//     }

//     await Categoria.findByIdAndUpdate(id, { $set: categoria }, { useFindAndModify: false }); //Find data for id and update por alimento
//     res.json({ status: 'Categoria updated' });
// }

subcategoriaCtrl.editsubCategoria = async (req, res) => {
    const { id } = req.params;

    const subcategoriaIMG = await SubCategoria.findById(req.params.id); 

    if (req.imagen === undefined) { 
        req.imagen = subcategoriaIMG.imagen
    } 

    const subcategoria = {
        name: req.body.name,
        imagen: req.imagen
    }

    await SubCategoria.findByIdAndUpdate(id, { $set: subcategoria }, { useFindAndModify: false }); //Find data for id and update por alimento
    res.json({ status: 'SubCategoria updated' });
}

subcategoriaCtrl.deletesubCategoria = async (req, res) => {
    await SubCategoria.findByIdAndRemove(req.params.id);
    res.json({ status: 'SubCategoria deleted' });
}

subcategoriaCtrl.seleccionaSubcategoria = async (req, res) => {
    const categoriaa = req.params.id;
    const aaa = await SubCategoria.find({ categoria: categoriaa });
    res.json(aaa);
}

module.exports = subcategoriaCtrl;

// creación de rama personal 
//2020