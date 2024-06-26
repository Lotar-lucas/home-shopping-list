const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

router.get('/healthcheck', async (req, res) => {
  console.log('Api is running');
  res.json({message: 'Api is running'})
})

router.get('/', async (req, res) => {
  const items = await listController.getList();
  res.json(items);
});

router.post('/', async () => {
  const newItem = await listController.crateList();
});

router.put('/:id', async () => {
  const updatedItem = await listController.editList();
  res.json(updatedItem);
});

router.delete('/:id', async () => {
  const deletedItem = await listController.removeList();
  res.json(deletedItem);
});

module.exports = router;