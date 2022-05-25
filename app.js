const express = require('express');
const path = require('path');

const app = express();

//Servidor
app.listen(8080, () => {
console.log('Servidor corriendo correctamente en el puerto 8080')})

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});