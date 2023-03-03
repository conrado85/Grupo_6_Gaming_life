const path = require('path')
const fs = require('fs')

const menuFile = fs.readFileSync(path.join(__dirname, '../productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)

const controller = {
    productos: (req,res) =>{
        res.render('productos',{listaProductos: listaProductos})
    },
    detalleProducto:(req,res) =>{
        const {id} = req.params
        const producto = listaProductos.find((producto)=>producto.id == id)
        res.render('detail',{producto})
    },
    crear:(req,res) =>{
        res.render('product-create')
    },
    productoNuevo:(req,res) => {
        

        idCounter = 0
        cantidadProductos = listaProductos.forEach(producto => {
            idCounter ++
        });

        producto = {
            id: idCounter + 1,
            img: 'default-image.png',
            ...req.body
        }
        console.log(producto)
        listaProductos.push(producto)

        listaProductosJSON = JSON.stringify(listaProductos)
        fs.writeFileSync('productos.json', listaProductosJSON)

        res.redirect('/gaminglife/productos/lista')
    }
}

module.exports = controller