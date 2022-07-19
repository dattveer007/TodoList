const exp=require('express');
const router=exp.Router();
router.use('/create-contact',require('./create-contact'));
router.use('/delete',require('./delete'));
router.get('/',require('../controller/index').home);
module.exports=router;
