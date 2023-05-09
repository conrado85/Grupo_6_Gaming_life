const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const productController = require('../controllers/productController')
const sessionMiddleware = require("../middlewares/sessionMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")

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

router.get('/lista', sessionMiddleware, productController.productos)

router.get('/detalle/:id', sessionMiddleware, productController.detalleProducto)

router.get('/crear', sessionMiddleware, authMiddleware, productController.crear)

router.post('/crear', upload.single('img'),productController.new)

router.get('/editar/:id', sessionMiddleware, authMiddleware, productController.edit)

router.put('/:id', sessionMiddleware, productController.update)

router.delete('/ProductoEliminado/:id', sessionMiddleware, authMiddleware, productController.delete)

module.exports = router