// console.log("May node be with you") //This worked with the express app and stuff was commented out
const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vaccinesites/', { useNewUrlParser: true , useUnifiedTopology: true } )

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html') // I forgot the '/' before index.html before
})

//what?
app.listen(2021, ()=>{
    console.log('Serving software engineer realness')
})