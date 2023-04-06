const express = require('express')
const { check } = require('express-validator');
const router = express.Router()
const userController = require('../controllers/userController')
const registerValidator = require('../middlewares/registerValidator')
const loginValidator= require('../middlewares/loginValidator') 

router.get('/login', userController.login);
router.post('/login', loginValidator, userController.userLogin); 

router.get('/registro', userController.register);
router.post('/registro', registerValidator, userController.userReg);


module.exports = router



//FILE ORIGINAL//


// const express = require('express')

// const router = express.Router()

// const userController = require('../controllers/userController')


// router.get('/login',userController.login)

// router.get('/registro',userController.register)

// module.exports = router