const express = require('express');
const router = express.Router();
const itemController = require('../controllers/');

router.get('/', async (req, res) => {
  const items = await item.find();
  res.json(items);
});

router.post('/', async () => {
  await itemController.create();  
});

router.put('/:id', async (req, res) => {
  const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

router.delete('/:id', async (req, res) => {
  const deletedItem = await item.findByIdAndRemove(req.params.id);
  res.json(deletedItem);
});

module.exports = router;