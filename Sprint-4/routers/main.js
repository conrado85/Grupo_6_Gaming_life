const express = require('express')

const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/productos', mainController.productos)

router.get('/:id', mainController.detalleProducto)

module.exports = router