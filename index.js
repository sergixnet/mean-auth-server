const express = require("express");
const cors = require("cors");

const app = express();

// CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto: ${4000}`);
});
