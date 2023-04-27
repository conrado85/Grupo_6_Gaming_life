//Requeridos para funcionamiento del Controller

const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models/User')

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

    //Validacion de datos

    let errores = validationResult(req);

    //En caso de haber errores, retornar a la vista con errores mappeados

    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      console.log(errors);
      return res.render("register", { session: req.session, errors: errors.mapped() });
    }

    //Modelo de toma de datos para creacion de nuevo usuario

    let user = {
      name: req.body.fullname,
      username: request.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename ? req.file.filename : 'default-avatar.png'
    };

    //Guardado de nuevo usuario en base de datos

    await db.User.create(user);

    // Guardado en session
    req.session.userLogged = newUser;

    res.redirect('/gaminglife/usuario/login');
  },

  //Autenticador de usuario registrado

  userLogin: async (req, res) => {
    try {
      const user = await db.User.findOne({
        include: ['role'],
        where: {
          username: req.body.username
        }
      });
      if (!user) {
        return res.render('login', { errors: { unauthorize: { msg: 'Credenciales incorrectas' } } });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.render('login', { errors: { unauthorize: { msg: 'Credenciales incorrectas' } } });
      }
      req.session.user = {
        id: user.id,
        username: user.username,
        role: user.role.name,
        name: user.fullname,
        avatar: user.avatar
      };
      if (req.body.rememberMe) {
        res.cookie("userId", user.username, user.password, { maxAge: 1000 * 60 * 5 });
      }
      return res.redirect("/gaminglife/usuario/profile");
    } catch (error) {
      res.send(error);
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
      const user = await db.User.findByPk(req.session.user.id, {
        attributes: { exclude: ['password'] },
        include: ['role']
      });
      res.render('profile', { user: user.dataValues });
    } catch (error) {

    }
  }
}
module.exports = userController;