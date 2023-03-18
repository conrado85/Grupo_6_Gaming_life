const express = require('express')
const { check } = require('express-validator');
const router = express.Router()
const path = require('path')
const multer = require ('multer')
const userController = require('../controllers/userController')
const registerValidator = require('../middlewares/registerValidator')
const loginValidator= require('../middlewares/loginValidator') 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname,'../public/images/userImg')
      cb(null, folder)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

  const upload = multer({ storage: storage });

router.get('/login', userController.login);
router.post('/login', loginValidator, userController.userLogin); 

router.get('/registro',userController.register);
router.post('/registro', upload.single('img'), registerValidator, userController.userReg);


module.exports = router