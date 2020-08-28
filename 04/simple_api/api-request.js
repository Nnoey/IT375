const express= require('express');
const app= express();

const port= process.env.PORT || 8000;

app.use(express.json());
const itstudent=[
    {id:21, 'fname':'พัชรพล','lname':'นวลจันทร์','tel':'123456789'},
    {id:33, 'fname':'แทนรัก','lname':'มังคละคุปต์','tel':'987654321'},
    {id:42, 'fname':'ชาลิสา','lname':'เทพดนตรี','tel':'2580369741'},
    {id:45, 'fname':'เสฏฐนันท์','lname':'อรรถสิษฐ์','tel':'597841359'},
    {id:47, 'fname':'วิรัลยุพา','lname':'ถมรุ่ง','tel':'225895462'},
];

//api,routing

app.get('/api/getstudent',(req,res)=>{
    res.send(itstudent);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length!= 0){
        console.log(myQueryString.id);
        const stuId = itstudent.find(element => element.id ==parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId);
        }else{
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }
    }else{
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});

app.get('/api/getstuid/:id',(req,res)=>{
    const stuId = itstudent.find(element => element.id ==parseInt(req.params.id));
    console.log(req.params.id);
    if(stuId){
        res.send(stuId);
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
});






app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
    });
