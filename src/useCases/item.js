const itemService = require('../services')

const getById = async ({ itemId }) => {
  return await itemService.item.getItemById({itemId});
}

const create = async ({ name, description, price, categoryId }) => {
  return await itemService.item.createItem({name, description, price, categoryId});
}

const update = async ({ itemId, name, description, price, categoryId }) => {
  const isExist = await itemService.item.checkIfItemExists({itemId});

  if(!isExist) { throw new Error('Item not found');}

  return await itemService.item.updateItem({itemId, name, description, price, categoryId});
}


const remove = async ({ itemId }) => {
  // TODO: put logical exclusion in the project
  const isDeleted = await itemService.item.getItemById({itemId});

  if(!isDeleted) { throw new Error('item already excluded');}

  return await itemService.item.deleteItem({ itemId });
}

module.exports = { 
  create,
  update,
  remove,
  getById
}