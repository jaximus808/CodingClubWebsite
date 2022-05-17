import { useFrame } from '@react-three/fiber';
import { useState,useEffect, useRef } from 'react';
import './Resources.css';
import './ResourcesMobile.css'
import Background from './Background';
import LowPowerBack from './LowPowerBack';

function Computer(props)
{
    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 

    const powerState = useRef(false)

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

        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[])


    return(
        <>
            {(lowPower) ? <Background/>:<LowPowerBack/>}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            

            <div ref={fixedHeaderElement} className='fixedLinks'>
                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            

            <div className='containerResources' style={{position:'absolute',color:"white"}}>
                <div style={{top:"25%"}} className='ClubTitle'>
                    The Coding Club
                    <div style={{fontSize:"4vw"}}>Resources</div>
                </div>
                <div className='LowPowerMode'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(!lowPower) ? "LowPowerButtonOn": "LowPowerButton" }`}></button>
            </div>
                <div ref={headerElement} className='links'>
                    <a href='/CodingClub/'>Home</a>
                    <a href="/CodingClub/AboutUs">About Us</a>
                    <a href="/CodingClub/Registration">Registration</a>
                    <a href="/CodingClub/Events">Events</a>
                    <a href="/CodingClub/Resources">Resources</a>
                </div>
                <div className='FormLinks'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"3.5vw"}}>Forms and Documents {"(Under Construction)"}</div>   
                    <div style={{"textAlign":"center"}}>
                        <ul style={{"fontSize":"2.5vw"}}>
                            <li style={{"marginBottom":"2vw"}}><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/constitution`}>Constitution</a></li>
                            <li style={{"marginBottom":"2vw"}}><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/policies`}>Club Policies</a></li>
                            <li><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/plan`}>Club Plan</a></li>
                        </ul>
                    </div>
                </div>
                <div className='BottomBaseResources'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"5vw","height":"5vw"}} src='./codingClubLogo.png'></img>
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
            {(lowPower) ? <Background/>:<LowPowerBack/>}
           
            <div ref={fixedHeaderElement} className='fixedLinksMobile'>
                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            

            <div className='containerResourcesMobile' style={{position:'absolute',color:"white"}}>
                <div style={{top:"25%"}} className='ClubTitleMobile'>
                    The Coding Club
                    <div style={{fontSize:"8vw"}}>Resources</div>
                </div>
                <div className='LowPowerModeMobile'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(!lowPower) ? "LowPowerButtonOnMobile": "LowPowerButtonMobile" }`}></button>
            </div>
                <div ref={headerElement} className='linksMobile'>
                    <a href='/CodingClub/'>Home</a>
                    <a href="/CodingClub/AboutUs">About Us</a>
                    <a href="/CodingClub/Registration">Registration</a>
                    <a href="/CodingClub/Events">Events</a>
                    <a href="/CodingClub/Resources">Resources</a>
                </div>
                <div className='FormLinksMobile'>
                    <div style={{"fontWeight":"bold", "textAlign":"center","fontSize":"8vw"}}>Forms and Documents {"(WIP)"}</div>   
                    <div style={{"textAlign":"center"}}>
                        <div style={{"fontSize":"7vw","marginTop":"5vw"}}>
                            <div style={{"marginBottom":"5vw"}}><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/constitution`}>Constitution</a></div>
                            <div style={{"marginBottom":"5vw"}}><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/policies`}>Club Policies</a></div>
                            <div><a style={{"fontWeight":"bold", "textAlign":"center"}}target={"_blank"} href={`${window.location.protocol}//${window.location.host}/api/forms/plan`}>Club Plan</a></div>
                        </div>
                    </div>
                </div>
                <div className='BottomBaseResourcesMobile'>
                    <div style={{"fontSize":"4vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"20vw","height":"20vw"}} src='./codingClubLogo.png'></img>
                </div>
               
            </div>

            
        </>
        
    )
}



export default function Registration(props)
{
    return (
        <>
            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
}