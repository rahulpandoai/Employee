const express = require('express');//to get the express package 
const bodyParser = require('body-parser');//require body pareser packas
const mongoose = require('mongoose');//it is like above this the way when u require any packages
const path=require('path');
const fs=require('fs');
const employeeroute=require("./routes/Employee");
const app = express();// we get express for function 
const cors = require('cors');
const MONGODB_URI =
    `mongodb+srv://ramani:ragulramani@cluster0-1azzz.mongodb.net/employee?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(employeeroute);
mongoose
  .connect(MONGODB_URI) 
  .then(result => {
    console.log('connected!');
    app.listen(3001);   
  })
  .catch(err => {
    console.log(err);
  });

  