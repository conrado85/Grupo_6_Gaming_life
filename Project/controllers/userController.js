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
            birthday: req.body.birthday,
            password: bcrypt.hashSync(req.body.password, 10),
            img: req.body.img
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
        } else {
         let usersJSON = fs.readFileSync('userData.json', {encoding: 'utf-8'})
         if (usersJSON == "") {
          res.send("Usuario inexistente o datos ingresados incorrecto")
          // return res.render("login", {
          //   errors: { username: { msg: "No se encontró el usuario", olds: req.body } },
          // });
         } else {
           users = JSON.parse(usersJSON)
         }
         for (let i = 0; i < users.length; i++) {
           if (users[i].username == req.body.username && bcrypt.compareSync(req.body.password, users[i].password))
        res.render('profile', { session: req.session })
        }
      }
    }
  }

    module.exports= userController