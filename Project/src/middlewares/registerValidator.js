const { body } = require('express-validator')

//Validaciones de registro

const registerValidator = [
    body('fullname')
        .notEmpty().
        withMessage('Este campo es obligatorio')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('No puede incluir simbolos')
        .not()
        .isNumeric()
        .withMessage('No puede incluir numeros'),

    body('username')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('email')
        .isEmail()
        .withMessage('Ingrese una casilla de E-Mail valida')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('birthday')
        .notEmpty()
        .withMessage('Ingrese una fecha valida'),

    body('password')
        .notEmpty()
        .withMessage('Este campo es obligatorio')
        .isLength({ min: 6 })
        .withMessage('Su contraseña debe tener 6 caracteres como minimo'),

    body('confirmPassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Las contraseñas no coinciden')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('img')
        .custom((value, { req }) => req.file)
        .withMessage('Debe seleccionar una imagen de perfil')
];

module.exports = registerValidator