const itemService = require('../services')

const create = async ({name, description, price, categoryId}) => {
  return await itemService.item.createItem({name, description, price, categoryId});
}

module.exports = { create }