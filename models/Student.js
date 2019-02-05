var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: String,
  house: String,
  isBrave: Boolean,
  isAhole: Boolean,
  isSmart: Boolean,
  justHere: Boolean,
  updated_date: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);