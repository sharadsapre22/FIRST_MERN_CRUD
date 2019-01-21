const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost/MERN1";

// Express server
const app = express();
mongoose.Promise = global.Promise;

// Connect to db
mongoose.connect(dbUrl, { useNewUrlParser: true}).then(
    ()=> { console.log('Connected to DB...')},
    err=> { console.log('There is problem while connecting to DB.') }
);

// Express routes
const empRoutes = require('../Routes/routes');

// Convert incoming data to json.
app.use(bodyParser.json());

// Enable CORS(Cross origin resource sharing)
app.use(cors());

// Server port number
const port = process.env.port || 4000;

// Routes configuration
app.use('/employees', empRoutes);

// Start express server
const server = app.listen(port, ()=> {
    console.log('Server is listening on port: '+ port);
});





