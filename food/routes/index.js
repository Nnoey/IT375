const express = require('express');
//import data
const restaurants = require('../data');

const router = express.Router();
//Render wed
router.get('/',(req,res)=>{
    res.render('main',{restaurants}); 
    //main.ejs 
});

module.exports = router;
