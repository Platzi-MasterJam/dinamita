const express = require('express');
const {priceOfOne, price }= require('../controllers/materials');
const Router = express.Router();
Router.get('/', async function(req, res){
    try{
        let answer = await price(); 
        res.status(answer.status).json(answer.prices);
    }catch(error){
        console.log(error);
        res.status(answer.status)
    }
})

Router.post('/', async function(req, res){
    try{
        let answer = await priceOfOne(req.body); 
        res.status(answer.status).json(answer.prices);
    }catch(error){
        res.status(answer.status)
    }
})
module.exports = Router;