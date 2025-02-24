const db = require("../db");

async function getAllUsers(){
    const client = await db.connect();
    const res = await client.query("SELECT * FROM usuarios");

    client.release();

    return res.rows;
}

module.exports = { getAllUsers };
