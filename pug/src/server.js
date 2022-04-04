const express = require('express');
const productsRoutes = require('../routes/formulario.js');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set engines
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.redirect('/productos');
});

// Routes
app.use('/productos', productsRoutes);

// Server start
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

server.on('error', (error) => console.log(`Server error ${error}`));