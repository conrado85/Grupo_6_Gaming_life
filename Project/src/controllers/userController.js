//Requeridos para funcionamiento del Controller

const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models')

//Controller usuarios 

let userController = {

  //Logica de lista de usuarios
  userList: async (req, res) => {
    try {
      const users = await db.User.findAll({
        include: ['role'],
        attributes: {
          exclude: ['password', 'roles_id']
        }
      });
      res.render('users', { users });
    } catch (error) {
      res.send(error);
    }
  },

  //Render Registro

  register: function (req, res) {
    return res.render('register');
  },

  //Render Login

  login: function (req, res) {
    return res.render('login')
  },

  //Logica de Registro de nuevo usuario

  userReg: async function (req, res) {
    // Validacion de datos ingresados
    let errores = validationResult(req);

    // En caso de tener errores, retorna a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      return res.render("register", { errors: errors, olds: req.body });
    }

    let data = {
      name: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename ? req.file.filename : 'default-avatar.png',
      role_id: 2
    };
    // Guardado de usuario en base de datos
    let newUser = await db.User.create(data);

    // Logueo en session
    req.session.userLogged = newUser;

    // Redireccion a profile
    return res.redirect(`/gaminglife/usuario/profile`);
  },

  //Autenticador de usuario registrado

  userLogin: async function (req, res) {
    // Validacion de datos ingresados
    let errores = validationResult(req);

    // En caso de tener errores, retorna a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      return res.render("login", { errors: errors, olds: req.body });
    }

    let user = await db.User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // Busqueda de usuario
    if (user) {
      let passOk = bcrypt.compareSync(req.body.password, user.password);
      if (passOk) {
        // Guardado de datos en session si el usuario es correcto
        req.session.userLogged = user;
        req.session.lastActitity = Date.now();

        // Guardado de datos en Cookie si el usuario selecciono "recordar"
        if (req.body.rememberMe) {
          res.cookie("userId", user.id, { maxAge: 1000 * 60 * 5 });
        }
        // Redireccion a profile
        return res.redirect("/gaminglife/usuario/profile");
      } else {
        // Prompt error username - password
        return res.render("login", {
          errors: {
            password: {
              msg: "Datos ingresados incorrectos.",
            },
          },
          olds: req.body,
        });
      }
    } else {
      return res.render("login", {
        errors: { username: { msg: "Datos ingresados incorrectos", olds: req.body } },
      });
    }
  },

  //Logout (destruccion de session y borrado de cookies, con redireccion al login)

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("userId");
    return res.redirect("/gaminglife/usuario/login");
  },

  //Logica profile

  profile: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.session.userLogged.id, {
        attributes: { exclude: ['password'] },
        include: ['role']
      });
      res.render('profile', { user: user.dataValues });
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = userController;