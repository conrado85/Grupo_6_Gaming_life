const express = require('express')

const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/inicio', mainController.index)
router.get('/about-us',mainController.aboutUs)

module.exports = router