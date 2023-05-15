//Dependencias
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser");
const sessionMiddleware = require("../Project/src/middlewares/sessionMiddleware")

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
app.use(sessionMiddleware)

//Sistema de rutas
const userApiRouter = require('./src/routers/api/userRouter')
const productsApiRouter = require('./src/routers/api/productsRouter')
const mainRouter = require('./src/routers/main')
const userRouter = require('./src/routers/user')
const productRouter = require('./src/routers/products')
const carritoRouter = require('./src/routers/carrito')

app.use('/gaminglife', mainRouter)
app.use('/gaminglife/usuario', userRouter)
app.use('/gaminglife/productos', productRouter)
app.use('/gaminglife/', carritoRouter)
app.use('/api/user', userApiRouter)
app.use('/api/products', productsApiRouter)

// Activando cors - va a lograr a trapar cualquier ruta que impacte


//404
app.use((req,res,next)=> {
    res.status(404).render('not-found')
})


//Arrancar el servidor
app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030/gaminglife/inicio');
});