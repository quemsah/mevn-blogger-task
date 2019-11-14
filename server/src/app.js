const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')
var Post = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Post = require("../models/post");

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

// mongoose.connect('mongodb+srv://dbus:dbus@cluster0-imy10.mongodb.net/posts');
// mongoose.connect('mongodb+srv://dbus:dbus@cluster0-imy10.mongodb.net/test?authSource=admin');

app.listen(process.env.PORT || 8081)