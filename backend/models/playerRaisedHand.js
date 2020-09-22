const mongoose = require('mongoose');

const raisedSchema = mongoose.Schema({
  team:  { type: String, required: true},  
  name: { type: String, required: true},  
});

module.exports = mongoose.model('FirstRaisedHand', raisedSchema);