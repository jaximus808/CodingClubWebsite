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
    const [eventData, setEventData] = useState([]);

    const [page, setPage] = useState(0)
    const [atEnd, setEnd] = useState(false)


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

    const getEvents = (dir) =>
    {
        //move right
        console.log("boom")
        

        if(dir == 1 && !atEnd ) setPage(page+1);
        else if(page > 0 && dir == -1) 
        {
            console.log("DOWN?")
            setPage(page-1);
        }
        else 
        {
            console.log("OOF")
            return
        }
        console.log(page)
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvents`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    start:(page+dir)*5,
                    end:5 +(dir+page)*5//make this based on something later
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                if(data.error) return;
                console.log(data.events)
                eventData.splice(0,5)
                for(let i = 0; i < data.events.length; i++)
                {
                    const dateOb = new Date(data.events[i].EventDate);
                    data.events[i].dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                    eventData.push(data.events[i])

                }
                setEnd(data.end)
                console.log(eventData)
                load(true)

            });
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
                setEnd(data.end)
                load(true)

            });
            
        

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
            {(lowPower)? <Background/>: <LowPowerBack/>}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            
            <div ref={fixedHeaderElement} className='fixedLinks'>
                <a href='/'>Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            

            <div className='containerEvents' style={{position:'absolute',color:"white"}}>
                
                <div style={{top:"25%"}} className='ClubTitle'>
                    Coding Club
                    <div style={{fontSize:"4vw"}}>Events</div>
                </div>
                <div className='LowPowerMode'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(!lowPower) ? "LowPowerButtonOn": "LowPowerButton" }`}></button>
            </div>
                <div ref={headerElement} className='links'>
                    <a href='/'>Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Registration">Registration</a>
                    <a href="/Events">Events</a>
                    <a href="/Resources">Resources</a>
                </div>


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

                    <div style={{"position":"inherit","fontSize":"2vw","float":"right","textAlign":"center" , "bottom":"0px","width":"20vw","height":"5vw", "right":"0px"}}>
                        {(loaded) ? 
                        <div>
                            <button  onClick={(atEnd) ?null:()=>
                            {
                                getEvents(1)
                            }} className={(atEnd) ? "":"MoveButton"} style={ (atEnd) ? {"fontSize":"1.5vw",backgroundColor: "rgba(0,0,0,0)",color:"rgba(1,1,1,0.5)",border: "none",padding: "1vw"}:{}} > {"Next >"}</button>
                            <div style={{fontSize:"2vw"}}>Page {page+1}</div>
                            <button onClick={(page==0) ?null:()=>
                            {
                                console.log("?")
                                getEvents(-1)
                            }} className={(page == 0) ? "":"MoveButton"} style={ (page == 0) ? {"fontSize":"1.5vw",backgroundColor: "rgba(0,0,0,0)",color:"rgba(1,1,1,0.5)",border: "none",padding: "1vw"}:{}}  > {"< Back"}</button>
                        </div> 
                            : <></>}
                    </div>
                </div>



                <div className='BottomBaseEvent'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"4.5vw","height":"4.5vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>

            
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
    const [eventData, setEventData] = useState([]);

    const [page, setPage] = useState(0)
    const [atEnd, setEnd] = useState(false)



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
        fixedHeaderElement.current.style.top = "-10vw";
    }
    const handleScroll =()=>
    {
        const y = window.pageYOffset;
        yRef.current = y;
        if(!moved.current && yRef.current >= window.innerHeight-headerElement.current?.clientHeight-160 )
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
        console.log("boom")
        if(dir == 1 && !atEnd ) setPage(page+1);
        else if(page > 0 && dir == -1) 
        {
            console.log("DOWN?")
            setPage(page-1);
        }
        else 
        {
            console.log("OOF")
            return
        }
        console.log(page)
        fetch(`${window.location.protocol}//${window.location.host}/api/getEvents`, {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
                {
                    start:(page+dir)*5,
                    end:5 +(dir+page)*5//make this based on something later
                }
            )
        }).then(res=>res.json())
        .then(data =>
            {
                if(data.error) return;
                console.log(data.events)
                eventData.splice(0,5)
                for(let i = 0; i < data.events.length; i++)
                {
                    const dateOb = new Date(data.events[i].EventDate);
                    data.events[i].dateFormat = `${dateOb.getMonth()}/${dateOb.getDate()}/${dateOb.getFullYear()}` 
                    eventData.push(data.events[i])

                }
                setEnd(data.end)
                console.log(eventData)
                load(true)

            });
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
                setEnd(data.end)
                load(true)

            });
            
        

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
        {(!lowPower) ?<LowPowerBack/> :<Background/>}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
          
            <div ref={fixedHeaderElement} className='fixedLinksMobile'>
                <a href='/'>Home</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            

            <div className='containerEventsMobile' style={{position:'absolute',color:"white"}}>
                  
                <div style={{top:"25%"}} className='ClubTitleMobile'>
                    The Coding Club
                    <div style={{fontSize:"8vw"}}>Events</div>
                </div>
                <div className='LowPowerModeMobile'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(!lowPower) ? "LowPowerButtonOnMobile": "LowPowerButtonMobile" }`}></button>
            </div>
                <div ref={headerElement} className='linksMobile'>
                <a href='/'>Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Registration">Registration</a>
                    <a href="/Events">Events</a>
                    <a href="/Resources">Resources</a>
                </div>

               

                <div className='EventsListMobile'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"9vw"}}>Events</div>   
                    <div style={{"textAlign":"center"}}>
                        {loaded ? 
                        <>
                            {eventData.map((data) =>
                        
                                <div style={{paddingBottom:"5vw"}}>
                                    <div style={{"textAlign":"center", "height":"42vw", "padding":"0.5vw"}}>
                                        <img style={{"width":"40", "height":"40vw"}} src={data.ImageLink}></img>
                                    </div>
                                    <a href={`/api/event/${data._id}`} style={{"color":"black","fontSize":"8vw","textDecoration":"underline"}}>{data.Name}</a>
                                    <div style={{"fontSize":"7vw"}}>Event Date: {data.dateFormat}</div>
                                    <div className='descriptionEvent' style={{"overflow":"clip", "fontSize":"6vw"}}>Description: {data.Description}</div>
                            

                                </div>
                            )}
                       
                        </> 
                        :<div style={{"fontSize":"5vw"}}>loading...</div>}

                    </div>

                    <div style={{"position":"inherit","fontSize":"2vw","float":"right","textAlign":"center" , "bottom":"0px","width":"20vw","height":"5vw", "right":"0px"}}>
                        {(loaded) ? 
                        <div>
                            <button  onClick={(atEnd) ?null:()=>
                            {
                                getEvents(1)
                            }} className={(atEnd) ? "":"MoveButtonMobile"} style={ (atEnd) ? {"fontSize":"5vw",backgroundColor: "rgba(0,0,0,0)",color:"rgba(1,1,1,0.5)",border: "none",padding: "1vw"}:{}} > {"Next >"}</button>
                            <div style={{fontSize:"6vw"}}>Page {page+1}</div>
                            <button onClick={(page==0)  ?null:()=>
                            {
                                console.log("?")
                                getEvents(-1)
                            }} className={(page == 0) ? "":"MoveButtonMobile"} style={ (page == 0) ? {"fontSize":"5vw",backgroundColor: "rgba(0,0,0,0)",color:"rgba(1,1,1,0.5)",border: "none",padding: "1vw"}:{}}  > {"< Back"}</button>
                        </div> 
                            : <></>}
                    </div>
                </div>



                <div className='BottomBaseEventMobile'>
                    <div style={{"fontSize":"4vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by the President of this club. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"20vw","height":"20vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>

            
        </>
        
    )
}

export default function Events(props)
{
    return (
        <>

            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
    
}