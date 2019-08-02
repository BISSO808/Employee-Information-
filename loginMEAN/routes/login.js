const express=require('express');
const router = express.Router();
//passport is used at all situation
const passport= require('passport');
//local stratedy is used because we are using local username and password
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../model/admin');
const bcrypt=require('bcryptjs');
var isloggedin =false;
router.get('/',(req, res ,next)=>{
    res.render('login');
    });
    router.get('/success',(req, res ,next)=>{
      res.send(true);
      });
      router.get('/failure',(req, res ,next)=>{
        res.send(false);
        });
    router.post('/submit',(req, res,next)=>{
        passport.authenticate('local', {
          failureRedirect: 'failure'
         , failureFlash:true,
        successRedirect:'success'
       })(req, res, next)
       });
       passport.serializeUser((admin, done) =>{
        done(null, admin.id);
      });
      
      passport.deserializeUser((id, done)=> {
        Admin.findById(id,(err, admin)=> {
          done(err, admin);
        });
      });
      passport.use(new LocalStrategy(
        (username,password, done,res) =>{
              Admin.getAdmin({ username: username }, (err, admin) =>{
                if (err) { return done(err); }
                if (!admin) {
                return done(null, false, { message: 'Incorrect username.' });
              }
              bcrypt.compare(password, admin.password,(err, isMatch)=>{
                if(err) return err;
                if(isMatch){
             isloggedin=true;
                  return done(null, admin);
                }else{
                    return done(null, false, { message: 'wrong password' });
                }
                    });
                });
              })
    );
    router.get('/admin',ensureAuthenticated,(req,res, next)=>{
        Employee.getEmployee((err, employees) =>{
     res.render('admin',{
         employees:employees   
     })
     });
     });
     function ensureAuthenticated(req, res ,next){
        if(isloggedin){
          return next();
        }
        else{
          req.flash('error_msg','you need to log in');
          res.render('login')
        }
        }
module.exports=router;