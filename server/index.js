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

app.use("/api/forms", require("./routes/forms"));

app.use("/",express.static(path.join(__dirname,"..","build")))

app.use("/CodingClub",express.static(path.join(__dirname,"..","build")))

app.use("/CodingClub/Resources",express.static(path.join(__dirname,"..","build")))
app.use("/CodingClub/AboutUs",express.static(path.join(__dirname,"..","build")))

app.use("/CodingClub/Registration",express.static(path.join(__dirname,"..","build")))
app.use("/CodingClub/Events",express.static(path.join(__dirname,"..","build")))

app.use("/Robotics/",express.static(path.join(__dirname,"..","build")))



app.listen(process.env.PORT || 3000, () =>console.log("Server up"))