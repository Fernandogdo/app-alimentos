const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');
const multerControler = {};

multerControler = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

module.exports = multerControler;

