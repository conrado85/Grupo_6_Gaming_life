const { validationResult } = require('express-validator');
const path = require('path');
const fs = require ('fs')

let userController = {
    register: function(req, res){
        return res.render('registro')
    },
    login: function(req, res){
        return res.render('login')
    },
    userReg: (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
          return res.render('registro', { session: req.session, errors:errors.mapped() })
        }
        const {username, email, password, confirmPassword} = req.body
        req.session.username = username
        req.session.email = email
        req.session.password = password
        req.session.confirmPassword = confirmPassword
        res.render('registro', { session: req.session })
      },
      userLogin: (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
          return res.render('login', { session: req.session, errors:errors.mapped() })
        }
        const { username, password} = req.body
        req.session.username = username
        req.session.password = password
        res.render('login', { session: req.session })
    }
}

    module.exports= userController


//FILE ORIGINAL //


// const path = require('path')
// const fs = require('fs')


// //const menuFile = fs.readFileSync(path.join(__dirname, '../models/productos.json'),'utf-8')
// //const listaProductos = JSON.parse(menuFile)

// const usercontroller ={
// login:(req,res)=>{
//     res.render('login')
// },
// register:(req,res)=>{
//     res.render('registro')
// }
// }

// module.exports = usercontroller