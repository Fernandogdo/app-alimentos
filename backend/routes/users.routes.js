const express = require('express');
const router = express.Router();
const auth = require('../controllers/authentication.controller');
const user = require('../controllers/user.controller');
const upload = require('../controllers/uploadimage.controller');

router.get('/', user.getUsers);
router.post('/', [upload.cargarImagen], user.createUser);
router.get('/:id', user.getUser);
router.get('/check/:id', user.checkuserCreated);
router.put('/:id', [upload.cargarImagen], user.editUser);
router.delete('/:id', user.deleteUser);


module.exports = router;