const express = require('express');
const router = express.Router();
const auth = require('../controllers/authentication.controller');
const user = require('../controllers/user.controller');

router.get('/', [auth.verifyToken], user.getUsers);
router.post('/', user.createUser);
router.get('/:id', user.getUser);


module.exports = router;