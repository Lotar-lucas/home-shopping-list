const path = require('path');
const dotEnvPath = path.resolve('.env.testing');
require('dotenv').config({ path: dotEnvPath });
const database = required('../services/item.js')

module.exports = async () => {
  const database = await database.connect(); 
   global.__DB__ = database 
}