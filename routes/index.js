const exp=require('express');
const router=exp.Router();
router.get('/',require('../controller/index'));
module.exports=router;
