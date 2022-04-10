const router = require("express").Router(); 

const Event = require("../Models/Events");
const middleAuth = require("./middleAuth")

router.post("/createEvents/", middleAuth , async (req, res) =>
{
    try
    {
        const newEvent = new Event(
            {
                Name: req.body.name,
                Description: req.body.description,
                EventDate: Date.parse(req.body.date),
                ImageLink: req.body.imageLink
            }
        )

        const eventSaved = await newEvent.save(); 
        res.send({error:false, message:eventSaved._id} )
    }
    catch
    {
        res.send({error:true, message:"something went wrong" });
    }

}) 


router.get("/getRecentEvent/", async (req, res) =>
{
    try
    {
        var events = await Event.find()
        
        //console.log(events)
        
        events.sort((a,b) =>
        {
            const dateA = new Date(a.EventDate);
            const epochA = dateA.getTime();
            const dateB = new Date(b.EventDate);
            const epochB = dateB.getTime();

            if(epochA < epochB)
            {
                return -1; 
            }

            if(epochA > epochB)
            {
                return 1; 
            }

            return 0; 
        });
        const recentEvent = events[0];
        //console.log(events)
        res.send({error:false, name:recentEvent.Name, description:recentEvent.Description, imageLink:recentEvent.ImageLink, eventDate:recentEvent.EventDate  })
    }
    catch(e)
    {
        console.log(e)
        res.send({error:true, message:"something went wrong" });
    }

}) 

module.exports = router