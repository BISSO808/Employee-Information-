const express= require('express');
const router= express.Router();
const Employee= require('../model/users');
const passport=require('passport');
const Localstrategy =require('passport-local').Strategy;
router.get('/',(req,res, next)=>{
    Employee.getEmployee((err, employees) =>{
 res.json(employees);
 });
    });
router.get('/delete/:id',(req, res,next)=>{
    console.log(req.params.id)
Employee.deleteEmployee(req.params.id, (err, employees)=>{
    if(err) throw err
    else{
        Employee.getEmployee((err, employees) =>{
            res.json(employees);
            });
    }
});
});

module.exports= router;