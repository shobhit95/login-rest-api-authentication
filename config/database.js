const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/simple-rest-api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;