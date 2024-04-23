// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const routes =require('./routes/User.js');


const app = express();
const PORT = 3000;

// Configurar body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Configurar Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});



// Agregar las rutas al servidor
app.use(routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});