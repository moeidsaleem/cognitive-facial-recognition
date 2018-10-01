// express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({limit: '50mb', extended:true}));
app.use(bodyParser.json({
    type:'application/json',
    limit:'50mb'
  }));
// static folder
app.use(express.static(__dirname + '/public/src'));

// body Parser
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//code


//CORS - for handeling the http requests 
var cors=require('./cors');
app.use(cors.permission)

// Mongoose - connection to mLab
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:toor@ds161179.mlab.com:61179/first_project');

// project oxford
const oxford = require('project-oxford'), client = new oxford.Client('487c4337961b4cb7830e5b2bbe3ba7ad','westcentralus');



  
// routes
const faces = require('./routes/faces');
app.use('/api/faces', faces);
const histories = require('./routes/histories');
app.use('/api/histories', histories);

//server setup 
app.listen(3000);
console.log("working on 3000");
