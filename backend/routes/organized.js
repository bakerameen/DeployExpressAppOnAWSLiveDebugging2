const express = require("express");
const TeamsOrganize = require("../models/organaized");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("", checkAuth,  (req, res, next) => {      
  TeamsOrganize.find().then( documents => {
    console.log('toto 2020');
    res.status(200).json({
      message: 'Orginzed Tema Fetched!',
      orgnaizedTeam: documents
    });
  });
});

router.post("", checkAuth, (req, res, next) => {
  console.log(req.body);
  const team = new TeamsOrganize({
    team: req.body.team,
    firstPlayer: req.body.firstPlayer,
    secondPlayer: req.body.secondPlayer,
    score: req.body.score    
  });
  team.save().then(organizedTeam => {
    
    res.status(201).json({
      message: 'Team Organized Successfully!',
      teamOrganized : organizedTeam._id
    });

  });   


  
});


module.exports = router;