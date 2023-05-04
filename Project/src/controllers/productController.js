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
            const products =await db.Products.findAll()
            res.render('products', {products})
        } catch (error) {
            
        }
    },

    //renderiza el detalle del producto
    detalleProducto:(req,res) =>{
        db.Products.findByPk(req.params.id)
            .then(producto => {
                res.render('detail', {producto});
            });
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
                img: req.file? req.file.filename: 'default-image.png'
            }
            await db.Products.create(product)
            res.redirect('/gaminglife/productos/lista')
        }catch{
            res.send(error)
        }
    },

    //renderiza la vista de editar producto
    edit:(req,res)=>{
        db.Products.findByPk(req.params.id)
            .then(productToEdit => {
                res.render('product-edit', {productToEdit});
            });     
    },

    //actualiza un producto
    update:(req,res)=>{
        let productId = req.params.id;
        db.Products.update(
            {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
            })
        .then(()=> {
            return res.redirect('/gaminglife/productos/lista')})            
        .catch(error => res.send(error))
    },
    //borra un producto
    delete:(req,res)=>{
        let productId = req.params.id;
        db.Products.destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/gaminglife/productos/lista')})
        .catch(error => res.send(error)) 
    }

    
}

module.exports = controller