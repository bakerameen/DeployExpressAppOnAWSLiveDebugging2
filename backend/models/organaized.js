const mongoose = require('mongoose');

const teamsOrganizedSchema = mongoose.Schema({
    team:  { type: String, required: true},
    firstPlayer: { type: String, required: true},
    secondPlayer: { type: String, required: true},
    score: { type: String, required: true}
});

module.exports = mongoose.model('Organize', teamsOrganizedSchema);
