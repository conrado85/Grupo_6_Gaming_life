const { body } = require('express-validator')

//Validaciones de login 

const loginValidator = [
    body('username')
        .notEmpty()
        .withMessage('Por favor, ingrese su nombre de usuario'),

    body('password')
        .notEmpty()
        .withMessage('Ingresa tu contraseña para continuar')
        .isLength({ min: 6 })
        .withMessage('Contraseña erronea. Su contraseña se conforma con 6 o mas caracteres')
]

module.exports = loginValidator;