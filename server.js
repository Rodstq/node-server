require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/routes");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve the index.html file for the root route
// Use the user routes
app.use("/api", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
