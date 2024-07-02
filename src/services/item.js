const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const getItems = async ({}) => {
  const res = await pool.query('SELECT * FROM items');
  return res.rows;
};  

const createItem = async ({ name, description, price, categoryId }) => {
  console.log(name, description, price, categoryId);
  const res = await pool.query('INSERT INTO item (name, description, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *', [name, description, price, categoryId]);
  return res.rows[0];
}

const updateItem = async (id, item) => {
  const res = await pool.query('UPDATE item SET name = $1, description = $2 WHERE id = $3 RETURNING *', [item.name, item.description, id]);
  return res.rows[0];
};

const deleteItem = async (id) => {
  return await pool.query('DELETE FROM item WHERE id = $1', [id]);
};

module.exports = { getItems, createItem, updateItem, deleteItem, pool };