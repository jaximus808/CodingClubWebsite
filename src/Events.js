import { useState,useEffect, useRef } from 'react';
import './Events.css';



export default function Events(props)
{
    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 

    const [loaded, load] = useState(false)
    const [eventData, setEventData] = useState([]);

    const [page, setPage] = useState(0)
    const [atEnd, setEnd] = useState(false)

    const showFixed =() =>
    {
        fixedHeaderElement.current.style.top = "0";
    }

    const hideFixed =() =>
    {
        fixedHeaderElement.current.style.top = "-4vw";
    }
    const handleScroll =()=>
    {
        const y = window.pageYOffset;
        yRef.current = y;
        if(!moved.current && yRef.current >= window.innerHeight-headerElement.current?.clientHeight-40 )
        {
            moved.current = true
            window.requestAnimationFrame(showFixed);
        }
        if(moved.current && yRef.current < window.innerHeight-headerElement.current?.clientHeight+10 )
        {

            moved.current = false
            window.requestAnimationFrame(hideFixed);
        }
    }

    const getEvents = (dir) =>
    {
        //move right
        if(dir == 1 && !atEnd ) setPage(page+1);
        else if(page == 0 && dir == 0) setPage(page -1);
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvents`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    start:page*5,
                    end:5 +page*5//make this based on something later
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                
                console.log(data.events)
                
                for(let i = 0; i < data.events.length; i++)
                {
                    const dateOb = new Date(data.events[i].EventDate);
                    data.events[i].dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                    eventData.push(data.events[i])

                }


                console.log(eventData)
                load(true)

            });
    }

    useEffect(() => 
    {
        window.addEventListener("scroll", handleScroll)
        
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvents`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    start:0,
                    end:5 //make this based on something later
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                
                console.log(data.events)
                
                for(let i = 0; i < data.events.length; i++)
                {
                    const dateOb = new Date(data.events[i].EventDate);
                    data.events[i].dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                    eventData.push(data.events[i])

                }


                console.log(eventData)
                load(true)

            });
            
        

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            <div style={{top:"25%"}} className='ClubTitle'>
                Coding Club
                <div style={{fontSize:"4vw"}}>Events</div>
            </div>
            <div ref={headerElement} className='links'>
                <a href="/">Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Resources">Resources</a>
            </div>

            <div ref={fixedHeaderElement} className='fixedLinks'>
                <a href="/">Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Resources">Resources</a>
            </div>

            

            <div className='containerEvents' style={{position:'absolute',color:"white"}}>
                
               

                <div className='EventsList'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"3vw"}}>Events</div>   
                    <div style={{"textAlign":"center"}}>
                        {loaded ? 
                        <>
                            {eventData.map((data) =>
                        
                                <div style={{paddingBottom:"5vw"}}>
                                    <div style={{"textAlign":"center", "height":"10vw", "padding":"0.5vw"}}>
                                        <img style={{"width":"10", "height":"10vw"}} src={data.ImageLink}></img>
                                    </div>
                                    <a href={`/api/event/${data._id}`} style={{"color":"black","fontSize":"3vw","textDecoration":"underline"}}>{data.Name}</a>
                                    <div style={{"fontSize":"2vw"}}>Event Date: {data.dateFormat}</div>
                                    <div className='descriptionEvent' style={{"overflow":"clip", "fontSize":"2vw"}}>Description: {data.Description}</div>
                            

                                </div>
                            )}
                       
                        </> 
                        :<div style={{"fontSize":"3vw"}}>loading...</div>}

                    </div>

                    <div style={{"position":"inherit", "textAlign":"center" , "bottom":"0px","width":"10vw","height":"5vw", "right":"0px","backgroundColor":"gray" }}>
                        {(loaded) ? 
                        <>
                            <button className='MoveButton'> {"< Back"}</button>
                            <button style={{}}> {"Next >"}</button>
                        </> 
                            : <></>}
                    </div>
                </div>



                <div className='BottomBaseEvent'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, exclduing modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"4.5vw","height":"4.5vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>

            
        </>
        
    )
}