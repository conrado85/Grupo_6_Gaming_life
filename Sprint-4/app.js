const express = require('express');
const path = require('path');

const app = express();

const mainRouter = require('./routers/main')
const userRouter = require('./routers/user')

app.use(express.static('public'));


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './views'))

app.use('/', mainRouter)
app.use('/user', userRouter)


app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});