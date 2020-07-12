const Alimento = require('../models/alimento');
const alimentoCtrl = {};

//Get Alimento
alimentoCtrl.getAlimentos = async(req, res) => {
    const alimentos = await Alimento.find();
    res.json(alimentos);
}

//Create Alimento
alimentoCtrl.creaAlimento = async(req, res) => {
    if (req.imagen === undefined) {
        req.imagen = null
    }

    const alimento = new Alimento({
        autor: req.body.autor,
        fecha: req.body.fecha,
        categoria: req.body.categoria,
        nombre_comun: req.body.nombre_comun,
        nombre_cientifico: req.body.nombre_cientifico,
        otro_nombre: req.body.otro_nombre,
        origen: req.body.origen,
        conservacion_alimento: req.body.conservacion_alimento,
        description: req.body.description,
        temporada: req.body.temporada,
        presentacion: req.body.presentacion,
        unidades: req.body.unidades,
        mercado: req.body.mercado,
        supermercado: req.body.supermercado,
        kilocalorias: req.body.kilocalorias,
        glucidos: req.body.glucidos,
        proteinas: req.body.proteinas,
        lipidos: req.body.lipidos,
        subcategoria: req.body.subcategoria,
        imagen: req.imagen
    });
    await alimento.save();
    res.json({ status: 'Alimento saved' });
}

//Get One Alimento 
alimentoCtrl.getAlimento = async(req, res) => {
    const alimento = await Alimento.findById(req.params.id);
    res.json(alimento);
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
//Edit Alimento
alimentoCtrl.editAlimento = async(req, res) => {
    const { id } = req.params;

    const alimentoIMG = await Alimento.findById(req.params.id);

    if (req.imagen === undefined) {
        req.imagen = alimentoIMG.imagen
    }
    const alimento = {
        subcategoria: req.body.subcategoria,
        autor: req.body.autor,
        fecha: req.body.fecha,
        categoria: req.body.categoria,
        nombre_comun: req.body.nombre_comun,
        nombre_cientifico: req.body.nombre_cientifico,
        otro_nombre: req.body.otro_nombre,
        origen: req.body.origen,
        conservacion_alimento: req.body.conservacion_alimento,
        description: req.body.description,
        temporada: req.body.temporada,
        presentacion: req.body.presentacion,
        unidades: req.body.unidades,
        mercado: req.body.mercado,
        supermercado: req.body.supermercado,
        kilocalorias: req.body.kilocalorias,
        glucidos: req.body.glucidos,
        proteinas: req.body.proteinas,
        lipidos: req.body.lipidos,
        imagen: req.imagen
    }
    await Alimento.findByIdAndUpdate(id, { $set: alimento }, { useFindAndModify: false }); //Find data for id and update por alimento
    res.json({ status: 'Alimento updated' });
}

//Delete Categoria
alimentoCtrl.deleteAlimento = async(req, res) => {
    await Alimento.findByIdAndRemove(req.params.id);
    res.json({ status: 'Alimento deleted' });
}

alimentoCtrl.seleccionaAlimento = async(req, res) => {
    const alimento = req.params.id;
    const aaa = await Alimento.find({ subcategoria: alimento });
    res.json(aaa);
}


module.exports = alimentoCtrl;