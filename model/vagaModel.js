const db = require("../db");

async function getAllVagas(){
    const client = await db.connect();
    const res = await client.query("SELECT * FROM vaga");

    client.release();

    return res.rows;
}

module.exports = { getAllVagas };
