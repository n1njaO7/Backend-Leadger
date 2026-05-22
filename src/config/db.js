const mongoose = require("mongoose")

function ConnectToDb(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Server is connected to Db");   
    })
    .catch(err=>{
        console.log("error connecting to db");
        console.log(err);
        process.exit(1)
    })
}

module.exports= ConnectToDb