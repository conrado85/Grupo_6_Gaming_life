const { validationResult } = require('express-validator');
const path = require('path');
const fs = require ('fs')
const bcrypt = require ('bcryptjs')

const userFile = fs.readFileSync(path.join(__dirname,"../data/userData.json"),'utf-8')
const userList = JSON.parse(userFile)

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
        idCounter = 0
        newUser = userList.forEach( user => {
            idCounter ++
        });

        user ={
            id: idCounter + 1,
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        userList.push(user)

        userListJSON = JSON.stringify(userList)
        fs.writeFileSync('userData.json', userListJSON)

        res.redirect('/gaminglife/usuario/login')
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