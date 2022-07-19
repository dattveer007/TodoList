const exp=require('express');
const schema=require('../model/schema');
const router=exp.Router();
router.get('/',(req,res)=>{
    let del=req.query.id;

    schema.findByIdAndDelete(del,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    })
});
module.exports=router;