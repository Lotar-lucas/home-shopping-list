const { Pool } = require('pg');


const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 0,
});

const getClient = async () => {
  const client = await pool.connect();
  return client;
};

module.exports = {
  pool,
  getClient,
};