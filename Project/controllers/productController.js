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
        console.log("se esta renderizando el producto " + producto.name)
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

        producto={
            id: idCounter + 1,
            name: req.body.name,
            description: req.body.description,
            price: "$" + req.body.price,
            payments: 12,
            img: req.body.name + this.id,
            category: req.body.category
        }

        listaProductos.push(producto)

        fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(listaProductos, null, ' '))

        res.redirect('/gaminglife/productos/lista')
    },
    editarProducto:(req,res)=>{
        const {id} = req.params
        console.log(id)
        const productToEdit = listaProductos.find((producto) => producto.id == id)
        console.log(productToEdit.name)
        res.render('product-edit', {productToEdit})
    },
    update:(req,res)=>{
        const {id} = req.params
        let productToUpdate = listaProductos.find((producto) => producto.id == id)
        productToUpdate= {
            ...productToUpdate,
            ...req.body
        } 
        
        const indexToEdit = listaProductos.findIndex((producto)=> producto.id == id)
        listaProductos[indexToEdit] = productToUpdate

        fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(listaProductos, null, ' '))

        res.redirect('/gaminglife/productos/lista')
    },
    imgChange:(req,res) => {
        console.log(req.file)
        res.redirect('/gaminglife/productos/lista')
    },
    delete:(req,res)=>{
        const {id} = req.params
        console.log(id)
        const productToDelete = listaProductos.findIndex((producto) => producto.id == id)

        listaProductos.splice(productToDelete,1)

        fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(listaProductos, null, ' '))
        res.redirect('/gaminglife/productos/lista')
    }

    
}

module.exports = controller