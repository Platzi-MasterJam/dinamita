const express = require('express');
const forms = require('../controllers/form');
const Router = express.Router();
Router.post('/', async function(req, res){
try{
        let answer = await forms(req.body); 
        res.status(answer.status).json(answer.message);
    }catch(error){
        console.log(error);
        res.status(answer.status)
    }
})

module.exports = Router;