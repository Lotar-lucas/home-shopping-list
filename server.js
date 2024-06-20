const express = require('express');
// const bodyParser = require('body-parser');
const itemRoutes = require('./src/routes');

const app = express();

// app.use(bodyParser.json());
app.use('/items', itemRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));