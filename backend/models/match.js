const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  team:  { type: String, required: true},
  score: { type: String, required: true},
  fname: { type: String, required: true},
  sname: { type: String, required: true}
});

module.exports = mongoose.model('Match', matchSchema);
