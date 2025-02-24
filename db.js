const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.connectionString
});

async function connect() {
  return pool.connect();
}

module.exports = { connect };
