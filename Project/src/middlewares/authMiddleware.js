//Middleware de autenticacion, 
//si el cliente quiere ingresar sin registro o logueo a rutas usuario, sera redirigido a "login"

authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("login");
  }
  next();
};

module.exports = authMiddleware;