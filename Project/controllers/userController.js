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
        const {fullname, username, email, birthday, password, confirmPassword} = req.body
        req.session.fullname = fullname
        req.session.username = username
        req.session.email = email
        req.session.birthday = birthday
        req.session.password = password
        req.session.confirmPassword = confirmPassword
        res.render('registro', { session: req.session })
      },
      userLogin: (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
          return res.render('login', { session: req.session, errors:errors.mapped() })
        // } else {
        //   let usersJSON = fs.readFileSync('userData.json', {encoding: 'utf-8'})
        //   let users;
        //   if (usersJSON == "") {
        //     users= []
        //   } else {
        //     users = JSON.parse(usersJSON)
        //   }
        //   for (let i = 0; i < users.length; i++) {
        //     if (users[i].username == req.body.username) {
        //       if (users[i].password == req.body.password)
        //   }
        }
        // const { username, password} = req.body
        // req.session.username = username
        // req.session.password = password
        res.render('profile', { session: req.session })

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