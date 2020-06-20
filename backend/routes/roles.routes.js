const express = require('express');
const router = express.Router();

const rol = require('../controllers/rol.controller');

router.get('/', rol.getRoles);
router.post('/', rol.createRol);
router.get('/:id', rol.getRol);


module.exports = router;