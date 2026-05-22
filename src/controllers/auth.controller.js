const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
/**
 * - USER RESGISTER CONTROLLER
 * - POST /api/auth/register
 */

async function userRegisterController(req,res) {
    const {email,passowrd,name} = req.body

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
    
}

module.exports={
    userRegisterController
}