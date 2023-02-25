const path = require('path')
const fs = require('fs')


//const menuFile = fs.readFileSync(path.join(__dirname, '../models/productos.json'),'utf-8')
//const listaProductos = JSON.parse(menuFile)

const usercontroller ={
login:(req,res)=>{
    res.render('login')
},
register:(req,res)=>{
    res.render('registro')
}
}

module.exports = usercontroller