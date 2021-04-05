// console.log("May node be with you") //This worked with the express app and stuff was commented out
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://nicole:hButEDlrGdO8nBax@cluster0.txsxy.mongodb.net/vax_waze?retryWrites=true&w=majority', { useUnifiedTopology: true }).then(client=>{
    
    console.log("Connected to database")
    //do something here
}).catch(error=> console.error(error))

//mongodb+srv://nicole:<password>@cluster0.txsxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// const mongoose = require('mongoose')

app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// mongoose.connect('mongodb://localhost/vaccinesites/', { useNewUrlParser: true , useUnifiedTopology: true } )

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html') // I forgot the '/' before index.html before
})

app.post('/site', (req, res)=>{
    console.log("Helllooooooo, fam!")
    console.log(req.body)
    //post request is not working wtih console.log
})

//what?
app.listen(2021, ()=>{
    console.log('Serving webpage realness on local host 2021')
})