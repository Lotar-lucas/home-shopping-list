const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 0000 ,
});

async function getItems() {
  const res = await pool.query('SELECT * FROM items');
  return res.rows;
}

async function addItem(item) {
  const res = await pool.query('INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *', [item.name, item.description]);
  return res.rows[0];
}

async function updateItem(id, item) {
  const res = await pool.query('UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *', [item.name, item.description, id]);
  return res.rows[0];
}

async function deleteItem(id) {
  await pool.query('DELETE FROM items WHERE id = $1', [id]);
}

module.exports = { getItems, addItem, updateItem, deleteItem };