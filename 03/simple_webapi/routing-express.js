
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

//step 2 using odj express's
app.get('/overview',(req, res)=>{
    res.send('overview page');
});
app.get('/product',(req, res)=>{
    res.send('Product page');
});
app.get('/api/user',(req, res)=>{
    const userData = {id:15,name:'Suchada'};
    res.send(userData);
});
// step 3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
    });