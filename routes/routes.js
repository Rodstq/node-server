const express = require("express");

const router = express.Router();

const UserController = require ("../controllers/userController");
const VagasController = require ("../controllers/vagaController");

// READ USERS
router.get("/usuarios", UserController.getUsers);

// READ VAGAS
router.get("/vagas", VagasController.getVagas);


module.exports = router;