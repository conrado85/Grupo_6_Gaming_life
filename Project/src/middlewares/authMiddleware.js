//Middleware de autenticacion, 
//si el cliente quiere ingresar sin registro o logueo a rutas usuario, sera redirigido a "login"

authMiddleware = (req, res, next) => {
  if (!req.session.userLogged) {
    return res.redirect("/gaminglife/usuario/login");
  }
  next();
};

module.exports = authMiddleware;