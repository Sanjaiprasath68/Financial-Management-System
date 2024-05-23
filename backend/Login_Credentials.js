const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({

    userName : String,
    password : String,
})

const LoginModel = mongoose.model('login_credentials', UserSchema);
module.exports = LoginModel