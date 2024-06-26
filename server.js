const express = require('express');
// const bodyParser = require('body-parser');
const listRoutes = require('./routes');

const app = express();

app.use('', listRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));