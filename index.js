const exp=require('express');
const db=require('./config/mongoose');
const schema=require('./model/schema');
const app=exp();
const  portno=8000;
app.use('/',require('./routes/index'));
app.use(exp.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(portno,(err)=>{
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    console.log(`Server is running at portno:${portno}`);
});
