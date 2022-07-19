const exp=require('express');
const router=exp.Router();
const controller=require('../controller/index');
router.use(exp.urlencoded());
router.post('/',controller.create);
module.exports=router;
