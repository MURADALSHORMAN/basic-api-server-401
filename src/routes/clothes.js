'use strict';

const express=require('express');
const validator = require('../middleware/validator');
const Clothes=require('../models/Clothes');
const clothesRouter=express.Router();
const clothes = new Clothes(); 

clothesRouter.get('/',getclothes);

clothesRouter.get('/:id',getclothes);

clothesRouter.post('/',validator,createclothes);

clothesRouter.put('/:id',validator,updateclothes);

clothesRouter.delete('/:id',deleteclothes);


function getclothes(req,res){
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function createclothes(req,res){
    const resObj = clothes.create(req.body);
    res.json(resObj);
}

function updateclothes(req,res){
    const resObj = clothes.update(req.params.id,req.body);
    res.json(resObj);
}

function deleteclothes(req,res){
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}

module.exports = clothesRouter;