const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./src/routes');
const cors = require('cors');
require('dotenv').config({ debug: true })

// const erroMiddleware = require('./src/middlewares/error');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: (origin, callback) => {
    // List of allowed origins
    const allowedOrigins = ['http://localhost://'];
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,PUT,PATCH,POST,DELETE', 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, // Allow cookies to be sent in requests
  optionsSuccessStatus: 204, // Response to OPTIONS requests (preflight)
};

app.use(cors(corsOptions));


// Routes
app.use('/items', itemRoutes);

const port = isNaN(parseInt(process.env.PORT))? 3000 : process.env.PORT
app.listen(port, () => console.info(`Server running on port ${process.env.PORT || 3000}`));