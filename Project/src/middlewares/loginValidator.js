const {body} = require ('express-validator')

const loginValidator = [
    body ('email')
    .isEmail().withMessage('Ingrese una casilla de E-Mail valida')
    .notEmpty().withMessage('Campo obligatorio, ingrese su E-Mail'),

    body ('password')
    .notEmpty().withMessage('Ingresa tu contraseña para continuar')
    .isLength({ min: 6 }).withMessage('Completa correctamente tu contraseña')
]

module.exports = loginValidator