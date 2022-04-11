import { useFrame } from '@react-three/fiber';
import { useState,useEffect, useRef } from 'react';
import './AboutUs.css';



export default function AboutUs(props)
{
   

    

    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 

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
                <div style={{fontSize:"4vw"}}>About Us</div>
            </div>
            <div ref={headerElement} className='links'>
                <a href="/">Home</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            <div ref={fixedHeaderElement} className='fixedLinks'>
                <a href="/">Home</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>

            

            <div className='container' style={{position:'absolute',color:"white"}}>
                
                <div className='WeDo'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Inspiration Through 1s and 0s</div>
                    <div style={{"fontSize":"2vw"}}>Our club seeks to spark more creative and passionate students into the field of computer science. New members with no to little experience with programming will join the club with the goal of being able to program in a generic language. The language of choice new members will learn will be C++. Despite its difficulty relative to other languages, C++ will allow students to learn programming patterns such as for-loops, classes, and type strict variable notation. This will allow a smoother transition to other languages and will create stronger habits when programming. Those who have an understanding of programming will practice for competitions such as but not limited to hackathons and algorithm competitions. Concepts outside of programming such as Networking will also be covered using Nodejs and C++ as its tools. </div>
                </div>

                <div className='Officers'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Meet Our Officers</div>
                    <div className='officerContainers'> 
                        <div className='president'>
                            <img style={{width:"20vw",height:"23vw"}} src="./OfficersPortrait/President.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>President: Jaxon Poentis</div>
                            <div style={{"fontSize":"1.5vw"}}>Hi my name is Jaxon Poentis and I am the president and founder of the Roosevelt Coding Club. I am a self-taught programming and have spent two years learning C#, python, and other languages. I have a passion for creating things through solving problems and creativity. My outlet to do so has been through coding and I want others with simillar interests as me share ideas and create a mark on this world.</div>
                        </div>
                        <div className='vicePresident'>
                            <img style={{width:"20vw",height:"23vw", float:"right", paddingLeft:"10px"}} src="./OfficersPortrait/President.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>Vice president: Cindy Mo</div>
                            <div style={{"fontSize":"1.5vw"}}> deez nuts </div>
                        </div>
                        <div className='secretary'>
                            <img style={{width:"20vw",height:"23vw", float:"right", paddingLeft:"10px"}} src="./OfficersPortrait/Secretary.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>Secretary: Mana Harada</div>
                            <div style={{"fontSize":"1.5vw"}}> deez nuts </div>
                        </div>
                        
                    </div>

                </div>

                <div className='BottomBase'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, exclduing modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"4.5vw","height":"4.5vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>
        </>
        
    )
}