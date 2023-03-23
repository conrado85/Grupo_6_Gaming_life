const path = require('path')
const fs = require('fs')

const menuFile = fs.readFileSync(path.join(__dirname, '../data/productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)

const controller = {
    carrito: (req, res) =>{
        res.render('carrito')
    }
}

module.exports = controller