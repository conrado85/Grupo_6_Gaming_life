const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/imgPorductos"))
    },
    filename: (req, file, cb) => {
        const newFilename = "img" + Date.now + path.extname(file.originalname)
        cb(null, "")
    }
})

const upload = multer({storage})


router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear' ,upload.single('imgF') ,productController.crear)

router.post('/productoNuevo',productController.productoNuevo)

router.get('/editar/:id',productController.editarProducto)

router.put('/:id', productController.update)

router.get('/imagen/:id', productController.imgUpdate)

module.exports = router