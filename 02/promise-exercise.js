const getStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let name ='suchada';
            if (name){
                resolve({stuid:id,stuname:name});
            }else{
                reject (new Error('Cannot get the result'));
            }
        },2000);
    });
}
getStudent(21)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});