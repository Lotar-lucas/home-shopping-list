const express = require('express');
const router = express.Router();
const itemController = require('../controllers/');

router.get('/healthcheck', async ( _, res) => {
  res.json({message: 'API is run! '});
});

router.get('/:id', async (req, res) => {
  return await itemController.item.getById(req, res);
});

router.post('/', async (req, res) => {
  return await itemController.item.create(req, res);  
});

router.put('/:id', async (req, res) => {
  return await itemController.item.update(req, res);
});

router.delete('/:id', async (req, res) => {
  return await itemController.item.remove(req, res);
});

module.exports = router;