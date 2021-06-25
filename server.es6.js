const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Bienvenido al servidor express BABEL');
})

const puerto = 8080;
const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
})