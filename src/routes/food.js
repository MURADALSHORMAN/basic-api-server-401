'use strict';

const express=require('express');
const validator = require('../middleware/validator');
const Food=require('../models/Food');
const foodRouter=express.Router();
const food = new Food(); 

foodRouter.get('/',getFood);

foodRouter.get('/:id',getFood);

foodRouter.post('/',validator,createFood);

foodRouter.put('/:id',validator,updateFood);

foodRouter.delete('/:id',deleteFood);


function getFood(req,res){
    const resObj = food.read(req.query.id);
    res.json(resObj);
}

function createFood(req,res){
    const resObj = food.create(req.body);
    res.json(resObj);
}

function updateFood(req,res){
    const resObj = food.update(req.params.id,req.body);
    res.json(resObj);
}

function deleteFood(req,res){
    console.log(req.params)
    const resObj = food.delete(req.params.id);
    res.json(resObj);
}

module.exports = foodRouter;