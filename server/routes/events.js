const router = require("express").Router(); 

const Event = require("../Models/Events");
const middleAuth = require("./middleAuth")

router.post("/removeEvent", middleAuth, async(req, res) =>
{
    try
    {
        const deleted = await Event.deleteOne({_id: req.body._id})
        if(!deleted) return res.send({error:true, message:"event does not exist."})
        
        res.send({error:false, message:`${req._id} deleted successfully`})
    }
    catch
    { 
        res.send({error: true, message:"something went wrong"})
    }
})

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

router.post("/getEvent/" , async (req, res) =>
{
    
    try
    {
        const fetchEvent = await Event.findById(req.body._id)

        if(!fetchEvent) return res.send(res.send({error:true, message:"event does not exist" }))
       
        res.send({error:false, message:fetchEvent.toJSON()} )
    }
    catch
    {
        console.log("LOL?")
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

router.post("/getEvents/", async (req, res) =>
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
        let endState = (req.body.start+5 >= events.length);
        if(req.body.end > events.length) req.body.end = events.length;

        if(req.body.start >= events.length)
        {
            req.body.start = 0; 
        } 
        if(req.body.start < 0 ) return res.send({error:true})


        const eventList = events.splice(req.body.start, 5);

        //console.log(eventList)
        for(const x in eventList)
        {
            eventList[x].toJSON();
            const dateOb = new Date(eventList[x].eventDate);
            eventList[x].dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}`;
        }
        //console.log(events)
        res.send({error:false, events:eventList, end:endState})
    }
    catch(e)
    {
        console.log(e)
        res.send({error:true, message:"something went wrong" });
    }

}) 


module.exports = router