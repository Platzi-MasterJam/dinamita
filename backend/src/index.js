const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

//connection database
const db = require('./store/connection');
db.sync({alter:false})

//global's configuration
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen( PORT , function(){
    console.log(`server running in http://localhost:${PORT}`)
})
