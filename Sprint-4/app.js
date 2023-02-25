const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const app = express();

app.use(methodOverride('_method'))

const mainRouter = require('./routers/main')
const userRouter = require('./routers/user')
const productRouter = require('./routers/products')

app.use(express.static('public'));


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './views'))

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use('/gaminglife', mainRouter)
app.use('/gaminglife/usuario', userRouter)
app.use('/gaminglife/productos', productRouter)

app.use((req,res,next)=> {
    res.status(404).render('not-found')
})

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030/gaminglife/inicio');
});