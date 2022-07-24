const express = require("express");
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT;

// Inicializar express
const app = express();

// CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});
