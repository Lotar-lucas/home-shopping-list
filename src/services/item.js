const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const getItemById = async ({ itemId }) => {
  const res = await pool.query(`
    SELECT 
      id as "itemId", name, description, price, category_id as "categoryId" 
    FROM item 
    WHERE id = $1
    `,
    [itemId]);

    // console.log(itemId);
  return res.rows[0];
};

const getItems = async ({}) => {
  const res = await pool.query(`
    SELECT 
      id,
      name,
      description,
      price,
      category_id as "categoryId"
    FROM items
    `
  );
  return res.rows;
};  

// const checkIfItemExists = async ({id}) => {
//   const res = await pool.query(`
//     SELECT 1 
//     FROM item 
//     WHERE id = $1
//     `,
//     [id]);
//   return res.rows[0];
// };

const createItem = async ({ name, description, price, categoryId }) => {
  console.log(name, description, price, categoryId);
  const res = await pool.query(`
      INSERT INTO 
        item (name, description, price, category_id) 
      VALUES ($1, $2, $3, $4) 
      RETURNING 
        id,
        name,
        description,
        price,
        category_id as "categoryId"
      `, 
    [name, description, price, categoryId]);
  return res.rows[0];
}

const updateItem = async ({itemId, name, description, price, categoryId}) => {
  console.log(itemId, name, description, price, categoryId);

  const res = await pool.query(`
    UPDATE item 
    SET 
      name = $1,
      description = $2,
      price = $3,
      category_id = $4
    WHERE 
      id = $5
    RETURNING 
      id,
      name,
      description,
      price,
      category_id as "categoryId"
      `,
    [name, description, price, categoryId, itemId]
  );
  return res.rows[0];
};

const deleteItem = async ({id}) => {
  return await pool.query(`
    DELETE 
      FROM item 
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = { 
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItemById
};
