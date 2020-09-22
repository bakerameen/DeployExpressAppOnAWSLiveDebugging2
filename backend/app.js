const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const teamRoutes = require("./routes/teams");
const userRoutes = require("./routes/users");
const organizedRoutes = require("./routes/organized");

const Match = require("./models/match");
const FirstRaisedHand = require("./models/playerRaisedHand");
const TeamNew = require("./models/teams")
const TeamsOrganize = require("./models/organaized");

const app = express();

const dbPath = "mongodb+srv://baqer:iggy5R1y8urUhxts@cluster0-2wlh3.mongodb.net/Naseej-letter-competetion?retryWrites=true&w=majority";
mongoose
  .connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log('error DB not Connected');
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

  app.post("/api/match", (req, res, next) => {
    const match = new Match({
      team: req.body.team,
      score: req.body.score,
      fname: req.body.fname,
      sname: req.body.sname
    });
    
    match.save().then(createdMatch => {
      res.status(201).json({
        message: 'Match added Successfully',
        matchid: createdMatch.id
      });
    });
  
  });

  app.get("/api/match", (req, res, next) => {
    Match.find().sort({"_id": -1}).then( documents => {
      res.status(200).json({
        message: "Matches fetched successfully!",
        matches: documents
      });
    });
  });
    
  app.get("/api/match/:id", (req, res, next) => {  
    const query  = FirstRaisedHand.where({ _id: req.params.id }); // <-- Use the correct param name      
    query.findOne().then( documents => {        
        res.status(200).json({
               message: "First Hand Rased!",
               firstHandRaised: documents
             });
      });
  
    // FirstRaisedHand.find({ _id: req.params.id }).then( documents => {
    //   console.log(documents);
    //   res.status(200).json({
    //     message: "First Hand Rased!",
    //     firstHandRaised: documents
    //   });
    // });
  });

  app.post("/api/teams", (req, res, next) => {
    console.log(req.body);
    const teamCreated = new TeamNew({
      teamName: req.body.team    
    });
    console.log(teamCreated);
    teamCreated.save().then( createdTeam => {    
      res.status(201).json({
      message: 'Team added Successfully',
      teamid: createdTeam.id
    });
  })
  });
  
  app.get("/api/teams", (req, res, next)=> {
    TeamNew.find().then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'team is created',
        team: documents
      });    
    })
  });
  
app.get('/', (req, res) => {
    res.send('hello AWS 2022');
    })


    
//     app.use("/api/posts", teamRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/teamOrganized", organizedRoutes);
    
    module.exports = app;