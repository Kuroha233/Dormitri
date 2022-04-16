const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define collection and schema for Items
var Comment = new Schema({
   createdAt: Date,
   //only record userid for update username
   userid: Number,
   text: String,
   postid: String
});

module.exports = mongoose.model('Comment', Comment);