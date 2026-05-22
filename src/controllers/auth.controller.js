const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
/**
 * - USER RESGISTER CONTROLLER
 * - POST /api/auth/register
 */

async function userRegisterController(req,res) {
    const {email,password,name} = req.body

    const isExists = await UserModel.findOne({
        email:email
    })

    if(isExists){
        return res.status(422).json({
            message : "Email alredy exists"
        })
    }

    const user = await UserModel.create({
        email , password , name
    })

    const token =jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"3d"})
    
    res.cookie("token",token)
    res.status(201).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })
}

/**
 * - USER LOGIN CONTROLLER
 * - POST /api/auth/login 
 */

async function userLoginController(req,res) {
    const {email,password} = req.body

    const user= await UserModel.findOne({email})
    if(!user){
        return res.status(401).json({
            message : "Email or password is Invalid"
        })
    }
    const isValidPassword = await user.comparePassword(password)
    if(!isValidPassword){
        return res.status(401).json({
            message : "Email or password is Invalid"
        })
    }

    const token =jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"3d"})
    
    res.cookie("token",token)
    res.status(200).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })


}





module.exports={
    userRegisterController,
    userLoginController
}