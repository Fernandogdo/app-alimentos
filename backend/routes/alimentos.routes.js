const express = require('express');
const router = express.Router();

const alimento = require('../controllers/alimento.controller');

router.get('/', alimento.getAlimentos);
router.post('/', alimento.createAlimento);
router.get('/:id', alimento.getAlimento);
router.put('/:id', alimento.editAlimento);
router.delete('/:id', alimento.deleteAlimento);

module.exports = router;