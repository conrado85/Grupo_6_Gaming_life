const express = require('express')

const router = express.Router()

const mainController = require('../controllers/mainController')
const sessionMiddleware = require("../middlewares/sessionMiddleware");

router.get('/inicio', sessionMiddleware, mainController.index)
router.get('/about-us',mainController.aboutUs)

module.exports = router