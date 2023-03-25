//Middleware de autenticacion, si el cliente quiere ingresar a "profile" sin registrarse, sera redirigido a "login"

authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("login");
  }

  next();
};

module.exports = authMiddleware;