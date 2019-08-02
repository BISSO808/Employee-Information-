const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const adminSchema = new mongoose.Schema({
    username : String,
    password: String
});
const Admin = mongoose.model('Admin', adminSchema);
module.exports=Admin;

module.exports.getAdmin= function(username, callback){
Admin.findOne(username,callback);
}
module.exports.addAdmin = function(admin, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(admin.password, salt, function(err, hash) {
        if(err){
            return (err);
        }else{
            admin.password=hash;
            Admin.create(admin, callback);
        }
        });
    });

}