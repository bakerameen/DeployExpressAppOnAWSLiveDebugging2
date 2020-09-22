const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const teamRoutes = require("./routes/teams");

const app = express();

app.use(bodyParser.json());

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

  
app.get('/', (req, res) => {
    res.send('hello AWS 2022');
    })

    app.use("/api/posts", teamRoutes);
    
    module.exports = app;