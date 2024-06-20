const itemUseCase = require('../useCases/item')

const create = async (req, res) => {
  const {name, description, price, categoryId = 1} = req.body;
  const item = await newItem.save();
  res.json(item);
}

module.exports = { create }