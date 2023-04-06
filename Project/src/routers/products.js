  const express = require('express')
  const router = express.Router()
const multer = require('multer')

const path = require('path')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname,'../public/images/imgProductos')
      cb(null, folder)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

  const upload = multer({ storage: storage });

router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear' , productController.crear)

router.post('/productoNuevo',productController.productoNuevo)

router.get('/editar/:id',productController.editarProducto)

router.put('/:id', productController.update)

router.delete('/ProductoEliminado/:id', productController.delete)

module.exports = router