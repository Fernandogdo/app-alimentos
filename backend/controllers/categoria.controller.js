const Categoria = require('../models/categoria');
const categoriaCtrl = {};

//Get Categoria
categoriaCtrl.getCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
}

//Create Categoria
categoriaCtrl.createCategoria = async (req, res) => {
    // var body = req.body;
    if (req.imagen === undefined) { 
        req.imagen = null 
    } 

    const categoria = new Categoria({
        name: req.body.name,
        description: req.body.description,
        imagen: req.imagen
    });
    await categoria.save();
    res.json({ status: 'Categoria saved' });
}

//Get One Aliment 
categoriaCtrl.getCategoria = async (req, res) => {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
}

//Edit Categoria
categoriaCtrl.editCategoria = async (req, res) => {
    const { id } = req.params;
    
    const categoriaIMG = await Categoria.findById(req.params.id);

    if (req.imagen === undefined) { 
        req.imagen = categoriaIMG.imagen
    } 

    const categoria = {
        name: req.body.name,
        description: req.body.description,
        imagen: req.imagen
    }

    await Categoria.findByIdAndUpdate(id, { $set: categoria }, { useFindAndModify: false }); //Find data for id and update por alimento
    res.json({ status: 'Categoria updated' });
}

//Delete Categoria
categoriaCtrl.deleteCategoria = async (req, res) => {
    await Categoria.findByIdAndRemove(req.params.id);
    res.json({ status: 'Categoria deleted' });
}

module.exports = categoriaCtrl;

// creación de rama personal 
//2020