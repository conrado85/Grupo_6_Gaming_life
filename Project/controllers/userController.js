//Requeridos para funcionamiento del Controller

const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

//Logica de lista de usuarios

const userFilePath = path.join(__dirname, "../data/userData.json");
function getUsers() {
  const userFile = fs.readFileSync(userFilePath, 'utf-8');
  const userList = JSON.parse(userFile);
  return userList;
}

//Renderizados de controlador de usuarios

let userController = {
  register: function (req, res) {
    return res.render('registro');
  },
  login: function (req, res) {
    return res.render('login')
  },

  //Logica de Registro de nuevo usuario

  userReg: (req, res) => {
    const userList = getUsers();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('registro', { session: req.session, errors: errors.mapped() });
    };
    idCounter = 0;
    newUser = userList.forEach(user => {
      idCounter++
    });

    //Modelo de datos tomados de formulario para creacion en JSON

    user = {
      id: idCounter + 1,
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      birthday: req.body.birthday,
      password: bcrypt.hashSync(req.body.password, 10),
      img: req.file?.filename || "avataruser.jpg"
    };
    userList.push(user);

    fs.writeFileSync(userFilePath, JSON.stringify(userList, null, 2));

    res.redirect('/gaminglife/usuario/login');
  },

  //Autenticador de usuario registrado

  userLogin: (req, res) => {
    const userList = getUsers();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('login', { session: req.session, errors: errors.mapped() });
    };

    //Verificador de existencia y validez de credenciales insertadas en Login Form

    const user = userList.find(element => element.username == req.body.username && bcrypt.compareSync(req.body.password, element.password));
    if (!user) {
      return res.render("login", { errors: { username: { msg: "Credenciales incorrectas" } } });
    }
    delete user.password;
    req.session.user = user;
    req.session.lastActitity = Date.now();
    return res.redirect("/gaminglife/usuario/profile");
  },

  //Logica profile

  profile: (req, res) => {
    res.render("profile");
  }
}
module.exports = userController;