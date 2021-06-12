const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

//connection database
const db = require('./store/connection');
db.sync({sync:false})

//global's configuration
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//controllers
const formRoute = require('./routes/form');
const materialsRoute = require('./routes/materials');

//route
app.use('/api/form', formRoute);
app.use('/api/materials', materialsRoute);
app.use('/', function(req,res){
    res.send("working");
})

app.listen( PORT , function(){
    console.log(`server running in http://localhost:${PORT}`)
})
