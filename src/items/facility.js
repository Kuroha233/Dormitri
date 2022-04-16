const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define collection and schema for Items
var Facility = new Schema({
    hookID: String,
    userid: Number,
    fName: String,
    fID: String,
    fTime: String,//timeslot
    fDate: String
});

module.exports = mongoose.model('Facility', Facility);
