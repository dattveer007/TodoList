const schema=require('../model/schema');
var list=[];
const home=(req,res)=>{
    schema.find({},(err,tasks)=>{
            if(err){
                console.log(err);
                return;
            }
            list=tasks;
            console.log(list);
    return res.render('./home',{
        task_list:list
    });


    });
};

const create=(req,res)=>{
    schema.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },(err,tasks)=>{
        if(err){
            console.log(`Error:${err}`);
            return;
        }
        return res.redirect('/');
    });

};
module.exports={home,create};