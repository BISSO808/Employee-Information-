const express= require('express');
const app = express();
const port =3000;
const cors = require('cors')
const path = require('path');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
const url='mongodb+srv://admin:admin@cluster0-rax9a.mongodb.net/test?retryWrites=true&w=majority';
const expressValidator = require('express-validator');
const flash=require('connect-flash');
const session = require('express-session');
Employee=require('./model/users');
mongoose.connect(url , {useNewUrlParser: true});
const passport= require('passport');
//view setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
//bodyparser and middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// //express validator
// app.use(expressValidator());
// passwort js  middleware
app.use(passport.initialize());
app.use(passport.session());
//express session
app.use(session ({
  secret :'secret',
  saveUninitialized: true,
  resave: true
  }));
  //cors middleware
  app.use(cors())
   //express messages
  app.use(flash());
  app.use(function (req, res, next) {
    //apprently you have to use this commands in case of express not sure why
    res.locals.success_msg= req.flash('success_msg');
    res.locals.error_msg= req.flash('error_msg');
    res.locals.error= req.flash('error');
    res.locals.user= req.user || null;
    next();
  });
//routing for individual page
var AddEmployee = require('./routes/AddEmployee');
var indexRouter = require('./routes/indexRouter');
var register = require('./routes/register');
var login= require('./routes/login');
app.use('/login',login);
app.use('/add',AddEmployee);
app.use('/',indexRouter);
app.use('/register',register);
app.listen(port,()=>{
    console.log("App is listening in port "+port);
})

