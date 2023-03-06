const path = require('path')
const fs = require('fs')

const menuFile = fs.readFileSync(path.join(__dirname, '../data/productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)

const controller = {
    index: (req, res) =>{
        res.render('home')
    }
}

module.exports = controller