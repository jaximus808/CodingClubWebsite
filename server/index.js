const express = require("express");
const app = express(); 

const path = require("path")
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require("mongoose");

mongoose.connect(process.env.mongoConnect, {useNewUrlParser : true, useUnifiedTopology: true},()=>{
    console.log("Connected to db");
});

app.use(express.json());


app.use("/api", require("./routes/events"));

app.use("/",express.static(path.join(__dirname,"..","build")))

app.use("/info",express.static(path.join(__dirname,"..","build")))

app.listen(3000, () =>console.log("Server up"))