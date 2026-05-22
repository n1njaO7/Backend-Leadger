const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email : 
    { 
        type : String,
        required:[true,"Email Required"],
        unique : [true,"Email Already Exits"],
        trim : true,
        lowercase : true,
        match : [/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/]
    },

    password :
    {
        type : String,
        required : [true,"Password is reuired"],
        minlength : [6,"password should contain atleast 6 character"],
        select : false // it is used as when user data is filtered then password does not appear 
    },
 
    name : 
    {
        type : String,
        required : [true,"name is required"]
    },

    timestamps : true // it tell when the user is creted and updated last time

})

//this is created to hash the updated password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }

    const hash = await bcrypt.hash(this.password,10);
    this.password= hash;

    return next();
})

