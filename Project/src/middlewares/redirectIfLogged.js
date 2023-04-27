//Middleware de redireccion,
//si un usuario logeado quiere ingresar a "registro" o "login" sin hacer logout sera dirigido a "profile"

redirectIfLogged = (req, res, next) => {
    if (req.session.user) {
      return res.redirect("/gaminglife/usuario/profile");
    }
    next();
  };
  
  module.exports = redirectIfLogged;