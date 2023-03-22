const express = require('express')
const router = express.Router()
const multer = require('multer')

const path = require('path')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, path.join(__dirname, '../public/images/imgProductos'))
    },
    filename: function(req,res,cb){
        cb(null,file.fieldname + '-' + Date.now)
    }
})

const upload = multer({storage:storage})

router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear' , productController.crear)

router.post('/productoNuevo',productController.productoNuevo)

router.get('/editar/:id',productController.editarProducto)

router.put('/:id', productController.update)

router.post('/imagen/:id', productController.imgChange)


module.exports = router