const mongoose = require("mongoose");


const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>console.log("database connceted")).catch((error)=>console.log("error"+error.message));
