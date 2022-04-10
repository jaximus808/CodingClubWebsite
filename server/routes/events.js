const router = require("express").Router(); 

const Event = require("../Models/Events");
const middleAuth = require("./middleAuth")

router.post("/createEvents/", middleAuth , (req, res) =>
{
    res.send({error:false, message:"OBAMA" })
}) 

module.exports = router