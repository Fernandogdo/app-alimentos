// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const mongoose = require('mongoose');

const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();

const categoria = require('../controllers/categoria.controller');

// const public = require('../public');

const DIR = './public/';


const storage = multer.diskStorage({
  destination: 'public',
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, filename);
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


// User model
let Categoria = require('../models/categoria');


// POST User
router.post('/', upload.single('img'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const categoria = new Categoria({
    // _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    img: url + '/public/' + req.file.filename
  });
  categoria.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Category Saved successfully!",
      CategoryCreated: {
        // _id: result._id,
        name: result.name,
        description: result.description,
        img: result.img
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  });
});


router.put('/:id', upload.single('img'), async (req, res, next) => {
  const { id } = req.params;
  const url = req.protocol + '://' + req.get('host')
  const categoria =  {
    // _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    img: url + '/public/' + req.file.filename
  };
  await Categoria.findByIdAndUpdate(id, {$set: categoria}, {new: true}).then(result => {
    console.log(result); 
    res.status(201).json({
      message: "Category UPdated successfully!",
    });
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  });
})
  
  

router.get('/', categoria.getCategorias);
// router.post('/', categoria.createCategoria);
router.get('/:id', categoria.getCategoria);
// router.put('/:id', categoria.editCategoria);
router.delete('/:id', categoria.deleteCategoria);

module.exports = router;