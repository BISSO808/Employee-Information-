const express= require('express');
const router= express.Router();
const Employee= require('../model/users');
router.get('/',(req,res, next)=>{
    res.render('addEmployee');
})
router.post('/submit',(req, res,next)=>{
console.log(req.body);
  const newEmployee=new Employee(req.body);
  
    // let newEmployee= new Employee({
    // firstname: req.body.firstname,
    // lastname: req.body.lastname,
    // Address: req.body.Address,
    // City:req.body.city,
    // State:req.body.State,
    // Zip: req.body.Zip,
    // homephone: req.body.homephone,
    // Cellphone:req.body.cellphone,
    // Email:req.body.email
    // })
    Employee.AddEmployee(newEmployee, (err, employee)=>{
        if(err){
           throw(err);
        }else{
            Employee.getEmployee((err, employees) =>{
                res.json(employees);
                });
        }
    });
})
module.exports = router;