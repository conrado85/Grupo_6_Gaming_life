const path = require('path')
const fs = require('fs')


const menuFile = fs.readFileSync(path.join(__dirname, '../data/productos.json'),'utf-8')
const listaProductos = JSON.parse(menuFile)


const { error } = require('console');

//Requiero los modelos
const db = require('../database/models');

const controller = {

    //renderiza la lista de productos
    productos:async (req,res) =>{
        try {
            const product =await db.product.findAll()
            res.render('products', {product})
        } catch (error) {
            
        }
    },

    //renderiza el detalle del producto
    detalleProducto:(req,res) =>{
        const {id} = req.params
        const producto = listaProductos.find((producto)=>producto.id == id)
        res.render('detalleProducto',{producto})
    },

    //renderiza el formulario de creacion de un producto
    crear:(req,res) =>{
        res.render('product-create')
    },

    //crea un nuevo producto
    new: async(req,res) => {
        try{
            const product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                img: req.file.filename? req.filename: 'default-image.png'
            }
            await db.product.new(product)
            res.redirect('gaminglife/productos/lista')
        }catch{
            res.send(error)
        }
    },

    //renderiza la vista de editar producto
    edit:(req,res)=>{

    },

    //actualiza un producto
    update:(req,res)=>{

    },
    //borra un producto
    delete:(req,res)=>{
        
    }

    
}

module.exports = controller