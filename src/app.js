const express = require('express');
const connectDB = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/productos', productoRoutes);

module.exports = app;