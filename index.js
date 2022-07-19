const exp=require('express');
const app=exp();
const  portno=8000;



app.listen(portno,(err)=>{
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    console.log(`Server is running at portno:${portno}`);
});
