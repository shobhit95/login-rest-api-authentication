const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const mongoose = require('./config/database'); //database configuration
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send("Welcome to the rest API")
})

// public route
app.use('/users', users);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(3000, () => { console.log('server started successfully!') })