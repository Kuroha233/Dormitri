const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define collection and schema for Items
var tempUser = new Schema({
   email: String,
   id: String,
   password: String,
   username: String,
   code: String,
});

module.exports = mongoose.model('tempUser', tempUser);
