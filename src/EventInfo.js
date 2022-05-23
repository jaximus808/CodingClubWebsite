import { useState,useEffect, useRef } from 'react';
import './Events.css';
import './EventsMobile.css';
import Background from './Background';
import LowPowerBack from './LowPowerBack';

function Computer(props)
{
    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 

    const [loaded, load] = useState(false)
    const [eventData, setEventData] = useState({})
    
    const [errorMsg, setErrorMsg] = useState(null)
    const [fetchError,setError] = useState(false)

    const [page, setPage] = useState(0)
    const [atEnd, setEnd] = useState(false)

    const EventSing = useRef(null)
    
    const BottomBase = useRef(null)


    const [lowPower, setLowPower] = useState(false)

    const handleLowPower = () =>
    {
        localStorage.setItem("lowPower", !lowPower)
        console.log(localStorage.getItem("lowPower"))
        setLowPower(!lowPower)
    }

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

    useEffect(() => 
    {
        window.addEventListener("scroll", handleScroll)
        const saved = localStorage.getItem("lowPower");
        console.log(saved)
        if(saved === undefined) 
        {
            localStorage.setItem("lowPower", false)
            setLowPower(false)
            console.log("??")
        }
        else
        {
            setLowPower(saved === "true")
            console.log(lowPower)
        }

        var path = window.location.pathname.split("/"); 

        console.log(path)
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvent`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    _id:path[path.length-2]
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                if(data.error)
                {
                    setErrorMsg(data.message);
                    setError(true)
                    load(true)
                    return;
                } 
                const dateOb = new Date(data.message.EventDate);
                data.message.dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                setEventData(data.message )
                
                
                console.log(data.message)
                load(true)

            });

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
            {(lowPower)? <LowPowerBack/>: <Background/>}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            
            <div className='EventfixedLinks'>
                <a href='/'>Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            <div ref={EventSing} className='SingularEventDisplay'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"5vw"}}>Event</div>   
                    <div style={{"textAlign":"center"}}>
                        {loaded ? 
                            fetchError ? 
                            <>
                            {
                                <>
                                    <div style={{"color":"black","fontSize":"4vw","textDecoration":"underline"}}>There was an error: </div>
                                    <div style={{"color":"black","fontSize":"3vw","textDecoration":"underline"}}>{errorMsg}</div>
                                </>
                            }
                        </> 
                        :
                        <>
                            {
                        
                                <div style={{paddingBottom:"5vw"}}>
                                    <div style={{"textAlign":"center", "height":"10vw", "padding":"0.5vw"}}>
                                        <img style={{"width":"10", "height":"10vw"}} src={eventData.ImageLink}></img>
                                    </div>
                                    <div  style={{"color":"black","fontSize":"4vw","textDecoration":"underline"}}>{eventData.Name}</div>
                                    <div style={{"fontSize":"2vw"}}>Event Date: {eventData.dateFormat}</div>
                                    <div style={{ "fontSize":"3vw"}}>Description: {eventData.Description}</div>
                            

                                </div>
                            }
                       
                        </> 
                        :<div style={{"fontSize":"3vw"}}>loading...</div>}

                    </div>
                </div>


{/* 
                <div ref={BottomBase} className='BottomBaseEventSingular'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"4.5vw","height":"4.5vw"}} src='./codingClubLogo.png'></img>
                </div> */}


            {/* <div className='containerEvents' style={{position:'absolute',color:"white"}}>
                
                <div style={{top:"25%"}} className='ClubTitle'>
                    The Coding Club
                    <div style={{fontSize:"4vw"}}>Events</div>
                </div>
                <div className='LowPowerMode'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(lowPower) ? "LowPowerButtonOn": "LowPowerButton" }`}></button>
            </div>
                <div ref={headerElement} className='links'>
                    <a href='/'>Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Registration">Registration</a>
                    <a href="/Events">Events</a>
                    <a href="/Resources">Resources</a>
                </div>


                            </div> */}

            
        </>
        
    )
}

function Mobile(props)
{
    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 

    const [loaded, load] = useState(false)
    const [eventData, setEventData] = useState({})
    
    const [errorMsg, setErrorMsg] = useState(null)
    const [fetchError,setError] = useState(false)

    const [page, setPage] = useState(0)
    const [atEnd, setEnd] = useState(false)

    const EventSing = useRef(null)
    
    const BottomBase = useRef(null)


    const [lowPower, setLowPower] = useState(false)

    const handleLowPower = () =>
    {
        localStorage.setItem("lowPower", !lowPower)
        console.log(localStorage.getItem("lowPower"))
        setLowPower(!lowPower)
    }

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

    useEffect(() => 
    {
        window.addEventListener("scroll", handleScroll)
        const saved = localStorage.getItem("lowPower");
        console.log(saved)
        if(saved === undefined) 
        {
            localStorage.setItem("lowPower", false)
            setLowPower(false)
            console.log("??")
        }
        else
        {
            setLowPower(saved === "true")
            console.log(lowPower)
        }

        var path = window.location.pathname.split("/"); 

        console.log(path)
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvent`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    _id:path[path.length-2]
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                if(data.error)
                {
                    setErrorMsg(data.message);
                    setError(true)
                    load(true)
                    return;
                } 
                const dateOb = new Date(data.message.EventDate);
                data.message.dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                setEventData(data.message )
                
                
                console.log(data.message)
                load(true)

            });

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
            {(lowPower)? <LowPowerBack/>: <Background/>}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            
            <div className='EventfixedLinksMobile'>
                <a href='/'>Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            <div ref={EventSing} className='SingularEventDisplayMobile'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"14vw"}}>Event</div>   
                    <div style={{"textAlign":"center"}}>
                        {loaded ? 
                            fetchError ? 
                            <>
                            {
                                <>
                                    <div style={{"color":"black","fontSize":"4vw","textDecoration":"underline"}}>There was an error: </div>
                                    <div style={{"color":"black","fontSize":"3vw","textDecoration":"underline"}}>{errorMsg}</div>
                                </>
                            }
                        </> 
                        :
                        <>
                            {
                        
                                <div style={{paddingBottom:"5vw"}}>
                                    <div style={{"textAlign":"center", "height":"42vw", "padding":"0.5vw"}}>
                                        <img style={{"width":"40", "height":"40vw"}} src={eventData.ImageLink}></img>
                                    </div>
                                    <div  style={{"color":"black","fontSize":"12vw","textDecoration":"underline"}}>{eventData.Name}</div>
                                    <div style={{"fontSize":"8vw"}}>Event Date: {eventData.dateFormat}</div>
                                    <div style={{ "fontSize":"10vw"}}>Description: {eventData.Description}</div>
                            

                                </div>
                            }
                       
                        </> 
                        :<div style={{"fontSize":"3vw"}}>loading...</div>}

                    </div>
                </div>

        </>
        
    )
}

export default function EventInfo(props)
{
    return (
        <>

            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
    
}