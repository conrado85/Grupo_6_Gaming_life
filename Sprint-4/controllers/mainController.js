const path = require('path')
const fs = require('fs')

const menuFile = fs.readFileSync(path.join(__dirname, '../models/productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)

const controller = {
    index: (req, res) =>{
        res.render('home')
    },
    productos: (req,res) =>{
        res.render('productos',{listaProductos: listaProductos})
    },
    detalleProducto:(req,res) =>{
        const {id} = req.params
        const producto = listaProductos.find((producto)=>producto.id == id)
        res.render('detalleProducto',{producto})
    }
}

module.exports = controller