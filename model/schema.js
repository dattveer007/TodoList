const mongo=require('mongoose');
const schema=new mongo.Schema({
    Description:{
        type:String,
    },
    category:{
        type:String
    },
    date:{
        type:Date
    }
});
const model=mongo.model('model',schema);
module.exports=model;