let express = require('express');
let router = express.Router();
let auth = require('../models/auth');
router.get('/getauthinfo',(req,res,next)=>{
   let pid = req.param("id");
   auth.find({pid},(err,doc)=>{
       if(err){
           return res.json({
               result:false
           })
       }
       console.log(typeof doc)
       return res.json({
           result:true,
           data:doc
       })
   })
});
module.exports = router;