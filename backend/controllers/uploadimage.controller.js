 
const User = require('../models/user');
const multer = require('multer');
const path = require('path');

const uploadCtrl = {};

// Multer File upload settings
const DIR = './public';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, DIR);
    cb(null, path.join(__dirname, '../uploads/'))
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
    // cb(null, Date.now() + file.originalname)
  }
});

// Multer Mime Type Validation
const upload = multer({
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

uploadCtrl.cargarImagen = [upload.single('upload'), function (req, res, next) {
  try {
    var img = req.file;
    console.log("test2 ", img);
    const url = req.protocol + '://' + req.get('host')
    console.log("urlantes", url);
    var imagen = url + '/backend/uploads/' + req.file.filename;
    req.imagen = imagen;
    
    if (!error) {
      next();
    }
    
  } catch (error) {
    next();
  }

}]

module.exports = uploadCtrl;