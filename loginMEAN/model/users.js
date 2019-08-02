const mongoose= require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    Address:String,
    City:String,
    State:String,
    Zip: Number,
    homephone: String,
    Cellphone: String,
    Email:String
})

const Employee= mongoose.model('Employee',EmployeeSchema);
module.exports=Employee;

module.exports.AddEmployee = function(employee, callback){
    Employee.create(employee,callback);
}
module.exports.getEmployee= function(callback){
    Employee.find(callback);
}
module.exports.deleteEmployee= function(_id,callback){
    Employee.findByIdAndRemove(_id, callback);
}