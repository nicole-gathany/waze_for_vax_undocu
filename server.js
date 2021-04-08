// console.log("May node be with you") //This worked with the express app and stuff was commented out
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");

dotenv.config(); 

MongoClient.connect(process.env.DB_CONNECT
  ,
  { useUnifiedTopology: true }
)
  .then((client) => {
    console.log("Connected to database");
    //do something here
    const db = client.db('vax_waze');
    const sitesCollection = db.collection('vax_sites')
  })
  .catch((error) => console.error(error));


// const mongoose = require('mongoose')

app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));


// mongoose.connect('mongodb://localhost/vaccinesites/', { useNewUrlParser: true , useUnifiedTopology: true } )


//to set up ejs
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // I forgot the '/' before index.html before
});



app.post("/site", (req, res) => {

  sitesCollection.insertOne(req.body)
  .then(result=>{
      console.log(result)
  }
    ).catch(error=> console.log(error))
  //post request is not working wtih console.log
});

//what?
app.listen(2021, () => {
  console.log("Serving webpage realness on local host 2021");
});
