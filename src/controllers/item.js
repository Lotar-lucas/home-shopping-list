const itemUseCase = require('../useCases')

const getById = async (req, res) => {
  const item = await itemUseCase.item.getById({ itemId: req.params.id });
  res.status(200).json(item);
}

const getByAll = async (_req, res) => {
  const item = await itemUseCase.item.getAll();
  res.status(200).json(item);
}

const create = async (req, res) => {
  const {name, description, price = 0.00, categoryId = 1} = req.body;
  const item = await itemUseCase.item.create({name, description, price, categoryId});
  res.status(201).json(item);
}

const update = async (req, res) => {
  const {name, description = null, price = 0.00, categoryId = 1} = req.body;
  const itemUpdate = await itemUseCase.item.update({ itemId :req.params.id, ...req.body});
  res.status(200).json(itemUpdate);
}

const remove = async (req, res) => {
  await itemUseCase.item.remove({ itemId: req.params.id });
  res.status(201).json({message: 'Item deleted'});
}


module.exports = { 
  create,
  update,
  remove,
  getById,
  getByAll
}