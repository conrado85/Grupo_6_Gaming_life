const path = require('path')
const fs = require('fs')

const menuFile = fs.readFileSync(path.join(__dirname, '../data/productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)

const controller = {
    productos: (req,res) =>{
        res.render('productos',{listaProductos: listaProductos})
    },
    detalleProducto:(req,res) =>{
        const {id} = req.params
        const producto = listaProductos.find((producto)=>producto.id == id)
        res.render('detalleProducto',{producto})
    },
    crear:(req,res) =>{
        res.render('crearProducto')
    },
    productoNuevo:(req,res) => {
        

        idCounter = 0
        cantidadProductos = listaProductos.forEach(producto => {
            idCounter ++
        });

        producto={
            id: idCounter + 1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            payments: req.body.payments,
            img:""
        }

        listaProductos.push(producto)

        listaProductosJSON = JSON.stringify(listaProductos)
        fs.writeFileSync('productos.json', listaProductosJSON)

        res.redirect('/gaminglife/productos/lista')
    }
}

module.exports = controller