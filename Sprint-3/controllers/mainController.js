const path = require('path')

const controller = {
    index: (req, res) =>{
        res.sendFile(path.join(__dirname,'../views/Home.html'))
    },
    productos: (req,res) =>{
        res.sendFile(path.join(__dirname,'../views/productos.html'))
    },
    detalleProducto:(req,res) =>{
        res.send("Detalle producto")
    }
}

module.exports = controller