//Middleware de redireccion, si un usuario registrado quiere ingresar a "registro" o "login" sera dirigido a "profile"

redirectIfLogged = (req, res, next) => {
    if (req.session.user) {
      return res.redirect("/gaminglife/usuario/profile");
    }
    next();
  };
  
  module.exports = redirectIfLogged;