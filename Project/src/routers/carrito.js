const express = require('express')

const router = express.Router()

const carritoController = require('../controllers/carritoController')
const sessionMiddleware = require("../middlewares/sessionMiddleware")

router.get('/ventas', sessionMiddleware, carritoController.carrito)

module.exports = router