const { body } = require('express-validator')

//Validaciones de login 

const loginValidator = [
    body('username')
        .notEmpty()
        .withMessage('Ingresa tu nombre de usuario para continuar'),

    body('password')
        .notEmpty()
        .withMessage('Ingresa tu contraseña para continuar')
]

module.exports = loginValidator;