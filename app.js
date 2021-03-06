const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 3000;

//Servidor
app.listen(port, () => {
    console.log('up and running at port ${port}')
});

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post("/datos",(req, res)=>{
    res.send(req.body);
    })
