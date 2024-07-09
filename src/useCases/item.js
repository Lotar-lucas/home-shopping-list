const itemService = require('../services')

const getById = async ({ itemId }) => {
  return await itemService.item.getItemById({ itemId });
}

const create = async ({ name, description, price, categoryId }) => {
  return await itemService.item.createItem({name, description, price, categoryId});
}

const update = async (dateItems) => {
  const persistentItem = await itemService.item.getItemById({ itemId: dateItems.itemId });

  if(!persistentItem) { throw new Error('Item not found');}


  const entrySet = new Set(Object.entries(persistentItem));
  console.log(entrySet); // Set { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }

  const entrySet2 = new Set(Object.entries(dateItems));

  console.log(entrySet2); // Set { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }





  return await itemService.item.updateItem({
    ...persistentItem,
    ...dateItems.item
  });
}


const remove = async ({ itemId }) => {
  // TODO: put logical exclusion in the project
  const isDeleted = await itemService.item.getItemById({ itemId });

  if(!isDeleted) { throw new Error('item already excluded');}

  return await itemService.item.deleteItem({ itemId });
}

module.exports = { 
  create,
  update,
  remove,
  getById
}