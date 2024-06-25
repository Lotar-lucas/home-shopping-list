const itemUseCase = require('../useCases')

const create = async (req, res) => {
  const {name, description, price = 0.00, categoryId = 1} = req.body;
  const item = await itemUseCase.item.create({name, description, price, categoryId});
  res.json(item);
}

module.exports = { create }