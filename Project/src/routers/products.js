const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const productController = require('../controllers/productController')

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    const folder = path.join(__dirname, "../../public/images/imgProductos")
    cb(null, folder)
  },
  filename: (req,file,cb) => {
    const fileName = `${Date.now()}--product${path.extname(file.originalname)}`
    cb(null, fileName)
  }
})

const upload = multer({
  storage
})

router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear', productController.crear)

router.post('/crear', upload.single('img'),productController.new)

router.get('/editar/:id', productController.edit)

router.put('/:id', productController.update)

router.delete('/ProductoEliminado/:id', productController.delete)

module.exports = router