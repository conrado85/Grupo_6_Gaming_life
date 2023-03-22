const express = require('express')
const router = express.Router()


const path = require('path')
const productController = require('../controllers/productController')


router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear' , productController.crear)

router.post('/productoNuevo',productController.productoNuevo)

router.get('/editar/:id',productController.editarProducto)

router.put('/:id', productController.update)

router.get('/imagen/:id', productController.imgChange)

router.post('/actualizado', productController.imgUpdate)

module.exports = router