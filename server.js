const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos (CSS, imágenes, JS, etc.)
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Ruta para "Arreglos Florales"
app.get('/Arreglos-florales', (req, res) => {
    res.sendFile(__dirname + '/views/Arreglos-florales.html');
});

app.get('/Bouquets', (req, res) => {
    res.sendFile(__dirname + '/views/Bouquets.html');
});

app.get('/Desayunos', (req, res) => {
    res.sendFile(__dirname + '/views/Desayunos.html');
});

app.get('/Anchetas', (req, res) => {
    res.sendFile(__dirname + '/views/Anchetas.html');
});
app.get('/Peluches', (req, res) => {
    res.sendFile(__dirname + '/views/Peluches.html');
});
app.get('/Tazas', (req, res) => {
    res.sendFile(__dirname + '/views/Tazas.html');
});
app.get('/Bolsos', (req, res) => {
    res.sendFile(__dirname + '/views/Bolsos.html');
});
// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
