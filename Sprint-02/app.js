const express = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname,'./public');

app.use(express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/ayuda', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ayuda.html'));
});

app.get('/compras', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compras.html'));
});

app.get('/detalleProducto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/detalleProducto.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productos.html'));
});

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});