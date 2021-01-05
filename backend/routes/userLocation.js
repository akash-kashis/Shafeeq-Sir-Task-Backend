const express=require('express');
const router=express.Router();
const User=require('../models/location')

 router.post('/', function(req, res, next){
    User.create(req.body)
     .then(function(lDatas)
     {
        res.send(lDatas);
    })
     .catch(next);
 });


module.exports=router
