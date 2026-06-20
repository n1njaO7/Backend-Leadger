const mongoose = require("mongoose")



function connectToDB() {

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("server is connected to DB")
        })
        .catch((error)=>{
            console.log("FULL ERROR =>");
            console.log(error);
        })
}




module.exports = connectToDB