const {Router} = require("express");
const  authMiddleware  = require("../middlewares/auth.miidleware");


const transactionRoutes = Router();

/**
 * - POST /api/tansactions/
 * - Create a new transaction
 */

transactionRoutes.post("/", authMiddleware.authMiddleware, tran)

module.exports= transactionRoutes