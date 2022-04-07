const express = require("express");
const app = express(); 

const path = require("path")

app.use(express.json());

app.use(express.static(path.join(__dirname,"..","build")))

app.use("/info",express.static(path.join(__dirname,"..","build")))

app.listen(3000, () =>console.log("Server up"))