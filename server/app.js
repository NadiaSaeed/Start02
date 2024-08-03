require("dotenv").config();
const express = require("express");
const app = express();
/*const mongoose = require("mongoose");*/
/*require("./db/conn")*/



const port = 8005;

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});
