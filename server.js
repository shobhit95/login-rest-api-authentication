const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send("Welcome to the rest API")
})

app.listen(3000, () => { console.log('server started successfully!') })