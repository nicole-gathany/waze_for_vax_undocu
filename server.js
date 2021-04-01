// console.log("May node be with you") //This worked with the express app and stuff was commented out
const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vaccinesites', { useNewUrlParser: true , useUnifiedTopology: true } )

//what?
app.listen(1010, function(){
    console.log('Serving software engineer realness')
})