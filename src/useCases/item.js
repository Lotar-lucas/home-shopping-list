const { item } = require('.');
const itemService = require('../services')

const getById = async ({ itemId }) => {
  return await itemService.item.getItemById({ itemId });
}

const getAll = async () => {
  return await itemService.item.getItems();
};

const create = async ({ name, description, price, categoryId }) => {
  return await itemService.item.createItem({name, description, price, categoryId});
}

const update = async (dateItems) => {
  const persistentItem = await itemService.item.getItemById({ itemId: dateItems.itemId });

  if(!persistentItem) { throw new Error('Item not found');}

  return await itemService.item.updateItem(Object.assign(persistentItem, dateItems));
}


const remove = async ({ itemId }) => {
  const item = await itemService.item.getItemById({ itemId });

  if(!item) { throw new Error('item already deleted or not found');}


  return await itemService.item.deleteItem({ id:item.itemId });
}

module.exports = { 
  create,
  update,
  remove,
  getById,
  getAll
}