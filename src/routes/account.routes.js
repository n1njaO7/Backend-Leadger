const express =  require("express")
const middleware = require("../middlewares/auth.miidleware")
const accountController = require("../controllers/account.controller")

const router = express.Router()

/**
 * - POST api/accounts/
 * - Create a new account
 * - Protected Route
 */
router.post("/",middleware.authMiddleware,accountController.createAccountController)

module.exports=router