const express = require('express');
const router = express.Router();

const subcategoria = require('../controllers/subcategoria.controller');
const upload = require('../controllers/uploadimage.controller'); 

router.get('/', subcategoria.getsubCategorias);
router.post('/', [upload.cargarImagen], subcategoria.createSubCategoria);
router.get('/buscar/:id',  subcategoria.seleccionaSubcategoria);
router.get('/:id', subcategoria.getsubCategoria);
router.put('/:id', [upload.cargarImagen], subcategoria.editsubCategoria);
router.delete('/:id', subcategoria.deletesubCategoria);

module.exports = router;