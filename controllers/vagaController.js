const db = require("../db");

const vagaModel = require("../model/vagaModel");

async function getVagas(req,res){
    try {
        const vagas = await vagaModel.getAllVagas();
        res.json(vagas);
    } catch (error){
        console.error("Erro ao buscar vagas:", error); // Log the actual error
        res.status(500).json({error: "erro ao buscar vagas"});
    }
}

module.exports = {getVagas};