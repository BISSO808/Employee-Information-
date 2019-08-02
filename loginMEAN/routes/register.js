const express= require('express');
const router= express.Router();
const admin = require('../model/admin');
const { check, validationResult } = require('express-validator');
const expressValidator = require('express-validator');
router.get('/',(req,res,next)=>{
res.render('register',
{errors:[]}
);
});

router.post('/submit',[
check("username",'Username field is empty').isLength({min:1}), 
check("password",'Password should be at least four characters').isLength({min:4}),
check("password").custom((value,{req, loc, path}) => {
  console.log(req.body.username)
  if (value !== req.body.confirmpassword) {
      // throw error if passwords do not match
      throw new Error("Passwords don't match");
  } else {
      return value;
  }
})
],(req,res)=>{
  const errors = validationResult(req);
  if(errors.isEmpty()){
 ;
    let newAdmin= new admin({
      username :req.body.username,
      password : req.body.password
      });
    admin.addAdmin(newAdmin,(err,admin)=>{
      if(err){
          return err;
      }else{
        res.json(newAdmin);
      }
    })
  }else{
  console.log('this happed');
    res.render('register',{
      errors:errors.array()
    });
  }
});
module.exports= router;