const mongo=require('mongoose');
mongo.connect('mongodb://localhost/todo');
const db=mongo.connection;
db.on('err',console.error.bind(console,'err'));
db.once('open',()=>{
    console.log('Database on');
})
module.exports=db;