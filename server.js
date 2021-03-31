const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vaccinesites', { useNewUrlParser: true }, { useUnifiedTopology: true } )


app.listen(3000, () => console.log('Server started!'))