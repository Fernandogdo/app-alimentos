const express = require('express');
const router = express.Router();
// const multer = require('../libs/multer');
const alimento = require('../controllers/alimento.controller');
// const multer = require('multer');
// const uuid = require('uuid');
// const path = require('path');


// storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         cb(null, uuid() + path.extname(file.originalname));
//     }
// });

// var upload = multer({storage: storage})



router.get('/', alimento.getAlimentos);
router.post('/', alimento.creaAlimento);
router.get('/:id', alimento.getAlimento);
router.get('/buscar/:id', alimento.seleccionaAlimento);
router.put('/:id', alimento.editAlimento);
router.delete('/:id', alimento.deleteAlimento);

module.exports = router;    