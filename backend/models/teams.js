const mongoose = require('mongoose');

const teamsSchema = mongoose.Schema({
  teamName:  { type: String}  
});

module.exports = mongoose.model('TeamNew', teamsSchema);
