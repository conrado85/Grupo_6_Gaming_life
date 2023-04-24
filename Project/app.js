//Dependencias
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser");

//configuracion del 'app'

const app = express();
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './src/views'))
app.use(cookieParser());
app.use(express.urlencoded({ extended:false}))
app.use(expressSession( {secret:'secret', resave: false, saveUninitialized: true } ))
app.use(express.json())

//Sistema de rutas

<<<<<<< HEAD
const mainRouter = require('./routers/main')
const userRouter = require('./routers/user')
const productRouter = require('./routers/products')
const carritoRouter = require('./routers/carrito')
=======
const mainRouter = require('./src/routers/main')
const userRouter = require('./src/routers/user')
const productRouter = require('./src/routers/products')
>>>>>>> 9c5fef57ec067b4ff88f321d3798a8737d8352d1

app.use('/gaminglife', mainRouter)
app.use('/gaminglife/usuario', userRouter)
app.use('/gaminglife/productos', productRouter)
app.use('/gaminglife/', carritoRouter)

//404
app.use((req,res,next)=> {
    res.status(404).render('not-found')
})


//Arrancar el servidor
app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030/gaminglife/inicio');
});