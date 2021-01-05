const express=require('express');
const router=express.Router();
const User=require('../models/location')

router.get('/', async(req,res)=>{
    
     try{
     
        const usersLocation= await User.find({});
        if(!usersLocation) throw Error("something went wrong");
        res.status(200).json(usersLocation);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router