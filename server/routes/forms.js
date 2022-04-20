const router = require("express").Router(); 

const path = require("path")

router.get("/constitution", (req, res)=>
{
    res.sendFile(path.join(__dirname,"..","Documents","Constitution.pdf"))
})

router.get("/policies", (req, res)=>
{
    res.sendFile(path.join(__dirname,"..","Documents","ClubPolicies.pdf"))
})

router.get("/plan", (req, res)=>
{
    res.sendFile(path.join(__dirname,"..","Documents","ClubPlan.pdf"))
})



module.exports = router