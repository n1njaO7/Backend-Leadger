const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")

async function createTransaction(eq,res){

    const {fromAccount , toAccount , amount , idempotencyKey } = req.body
}

module.exports= createTransaction