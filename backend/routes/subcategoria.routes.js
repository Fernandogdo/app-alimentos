const express = require('express');
const router = express.Router();

const subcategoria = require('../controllers/subcategoria.controller');

router.get('/', subcategoria.getsubCategorias);
router.post('/', subcategoria.createSubCategoria);
router.get('/buscar/:id', subcategoria.seleccionaSubcategoria);
router.get('/:id', subcategoria.getsubCategoria);
router.put('/:id', subcategoria.editsubCategoria);
router.delete('/:id', subcategoria.deletesubCategoria);

module.exports = router;