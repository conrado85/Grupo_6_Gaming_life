const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/imgProductos"))
    },
    filename: (req, file, cb) => {
        const newFilename = "img" + Date.now + path.extname(file.originalname)
        cb(null, "")
    }
})

const upload = multer({storage})


router.get('/lista', productController.productos)

router.get('/detalle/:id', productController.detalleProducto)

router.get('/crear', productController.crear)

router.post('/productoNuevo',upload.single('imgF'),productController.productoNuevo)

module.exports = router