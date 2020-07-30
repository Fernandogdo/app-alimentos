const express = require('express');
const router = express.Router();

const cliente = require('../controllers/cliente.controller');

router.post('/create', cliente.crearUsuario);
router.post('/login', cliente.login);
router.post('/update', cliente.actualizaUsuario);
module.exports = router;