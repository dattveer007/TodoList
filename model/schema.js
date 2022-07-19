const mongo=require('mongoose');
const schema=new mongo.Schema({
    description:{
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