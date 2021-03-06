import { useFrame } from '@react-three/fiber';
import { useState,useEffect, useRef } from 'react';
import './AboutUs.css';

import './AboutUsMobile.css';
import Background from './Background';
import LowPowerBack from './LowPowerBack';

function Computer(props)
{
   
    const yRef = useRef(0);
    const moved = useRef(false)
    const headerElement = useRef(null);
    const fixedHeaderElement = useRef(null); 


    const [lowPower, setLowPower] = useState(false)

    const handleLowPower = () =>
    {
        localStorage.setItem("lowPower", !lowPower)
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
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            {(lowPower) ?<LowPowerBack/> :<Background/>}
            <div ref={fixedHeaderElement} className='fixedLinks'>

                    <a href='/'>Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Registration">Registration</a>
                    <a href="/Events">Events</a>
                    <a href="/Resources">Resources</a>
                </div>
            

            <div className='containerAbout' style={{position:'absolute',color:"white"}}>
                <div style={{top:"25%"}} className='ClubTitle'>
                    The Coding Club
                    <div style={{fontSize:"4vw"}}>About Us</div>
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

                
                <div className='WeDo'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>What we stand for</div>
                    <div style={{"fontSize":"2vw"}}>Our club seeks to spark more creative and passionate students into the field of computer science. New members with no to little experience with programming will join the club with the goal of being able to program in a generic language. The language of choice new members will learn will be C++. Despite its difficulty relative to other languages, C++ will allow students to learn programming patterns such as common syntax, data structures, and type strict variable notation. This will allow a smoother transition to other languages and will create stronger habits when programming. Those who have an understanding of programming will practice for competitions such as but not limited to hackathons and algorithm competitions. Concepts outside of programming such as Networking will also be covered using Nodejs and C++ as its tools.  </div>
                </div>

                <div className='Officers'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Meet Our Officers</div>
                    <div className='officerContainers'> 
                        <div className='president'>
                            <img style={{width:"20vw",height:"23vw"}} src="./OfficersPortrait/President.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>President: Jaxon Poentis</div>
                            <div style={{"fontSize":"1.5vw"}}>Hi my name is Jaxon Poentis and I am the president and founder of the Roosevelt Coding Club. I am a self-taught programmer and have spent two years learning C#, python, and other languages. I have a passion for creating things through solving problems and creativity. My outlet to do so has been through coding and I want others with simillar interests as me share ideas and create a mark on this world.</div>
                        </div>
                        <div className='vicePresident'>
                            <img style={{width:"20vw",height:"23vw", float:"right", paddingLeft:"1vw"}} src="./OfficersPortrait/VicePresident.jpg"></img>
                            <div style={{"fontSize":"2.5vw"}}>Vice president: Cindy Mo</div>
                            <div style={{"fontSize":"1.5vw"}}> I???m Cindy Mo. I???m the vice-president of the RHS Coding club, and I enjoy coding and applying technology to solve problems. I participate in CTFs for fun and to challenge myself.</div>
                        </div>
                        <div className='coVicePresident'>
                            <img style={{width:"19vw",height:"23vw", float:"right", paddingLeft:"2vw"}} src="./OfficersPortrait/CoVicePresident-min.jpg"></img>
                            <div style={{ marginRight:"2vw","fontSize":"2.5vw"}}>Vice president: Ryan Nguyen</div>
                            <div style={{"fontSize":"1.5vw"}}> I???m Ryan Nguyen, co-vice president of the Coding Club, and I love breaking things. I???m self taught in C++/C#, Javascript and others, and have experience in 3d printing and circuit analysis. I want to educate others and better develop the STEM presence at school.</div>
                        </div>
                        <div className='secretary'>
                            <img style={{width:"20vw",height:"23vw", float:"right",paddingLeft:"1vw"}} src="./OfficersPortrait/Secretary.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>Secretary: Mana Harada</div>
                            <div style={{"fontSize":"1.5vw",paddingRight:"2vw"}}>I am Mana Harada, the secretary of the RHS coding club. I enjoy biomedical engineering/genetic engineering and apply coding concepts to help me solve problems in those fields. This position will allow me to create connections with others with similar interests who I can exchange ideas with.</div>
                        </div>
                        <div className='treasure'>
                            <img style={{width:"19vw",height:"23vw", float:"right", paddingLeft:"1vw"}} src="./OfficersPortrait/Treasurer.png"></img>
                            <div style={{"fontSize":"2.5vw"}}>Treasurer: Peilin Wu</div>
                            <div style={{"fontSize":"1.5vw"}}> I???m Peilin Wu, the current treasurer of the RHS Coding club. I enjoy the process of solving math problems and applying it to certain aspects of coding. My wish to share my interests that drove me to this position in this club. </div>
                        </div>
                        <div className='historian'>
                            <img style={{width:"20vw",height:"23vw", float:"right",paddingLeft:"1vw"}} src="./OfficersPortrait/Historian.JPEG"></img>
                            <div style={{"fontSize":"2.5vw"}}>Historian: Freddie Liang</div>
                            <div style={{"fontSize":"1.5vw", marginRight:"2vw"}}>My name is Freddie Liang and I am the Historian of the roosvelt coding club. I enjoy tinkering with things and appraoching problems I encounter with an emperical approach. I hope I can meet more like minded individuals and together we can help create solutions for our community's problems.</div>
                        </div>
                        <div className='socialAdd'>
                           <div style={{"fontSize":"2.5vw"}}>Want To Know Us More or Get In Contact?</div>
                            <div style={{"fontSize":"1.8vw", marginRight:"2vw"}}>Visit our instagram page <a target="_blank" href='https://www.instagram.com/rhscodingclub/'>here</a> to learn more about what we're doing or to simply check us out. If you need to get in contact with us shoot an email at <div  style={{textDecoration:"underline"}}>rooseveltcodingclub@gmail.com</div> and we'll be sure to respond as soon as possible! </div>
                        </div>
                    </div>

                </div>

                <div className='BottomBaseAbout'>
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


    const [lowPower, setLowPower] = useState(false)

    const handleLowPower = () =>
    {
        localStorage.setItem("lowPower", !lowPower)
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

    useEffect(() => 
    {
        const saved = localStorage.getItem("lowPower");
        window.addEventListener("scroll", handleScroll)
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

            {(lowPower) ?<LowPowerBack/> :<Background/>}
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

            

            <div className='containerAboutMobile' style={{position:'absolute',color:"white"}}>
            <div style={{top:"25%"}} className='ClubTitleMobile'>
            The Coding Club
                <div style={{fontSize:"8vw"}}>About Us</div>
            </div>
            <div className='LowPowerModeMobile'>
                <div>Low Power Mode</div>
                <button onClick={handleLowPower} className={`${(lowPower) ? "LowPowerButtonOnMobile": "LowPowerButtonMobile" }`}></button>
            </div>
            <div ref={headerElement} className='linksMobile'>
                <a href='/'>Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Registration">Registration</a>
                    <a href="/Events">Events</a>
                    <a href="/Resources">Resources</a>
            </div>
                <div className='WeDoMobile'>
                    <div style={{"fontWeight":"bold", "fontSize":"7vw"} }>What We Stand For</div>
                    <div style={{"fontSize":"6vw"}}>Our club seeks to spark more creative and passionate students into the field of computer science. New members with no to little experience with programming will join the club with the goal of being able to program in a generic language. The language of choice new members will learn will be C++. Despite its difficulty relative to other languages, C++ will allow students to learn programming patterns such as common syntax, data structures, and type strict variable notation. This will allow a smoother transition to other languages and will create stronger habits when programming. Those who have an understanding of programming will practice for competitions such as but not limited to hackathons and algorithm competitions. Concepts outside of programming such as Networking will also be covered using Nodejs and C++ as its tools. </div>
                </div>

                <div className='OfficersMobile'>
                    <div style={{"fontWeight":"bold", "fontSize":"8vw"} }>Meet Our Officers</div>
                    <div className='officerContainersMobile'> 
                        <div className='presidentMobile'>
                            <img style={{width:"60vw",height:"70vw"}} src="./OfficersPortrait/President.png"></img>
                            <div style={{"fontSize":"7vw"}}>President: Jaxon Poentis</div>
                            <div style={{"fontSize":"5vw"}}>Hi my name is Jaxon Poentis and I am the president and founder of the Roosevelt Coding Club. I am a self-taught programmer and have spent two years learning C#, python, and other languages. I have a passion for creating things through solving problems and creativity. My outlet to do so has been through coding and I want others with simillar interests as me share ideas and create a mark on this world.</div>
                        </div>
                        <div className='vicePresidentMobile'>
                            <img style={{width:"60vw",height:"70vw",}} src="./OfficersPortrait/VicePresident.jpg"></img>
                            <div style={{"fontSize":"7vw"}}>Vice president: Cindy Mo</div>
                            <div style={{"fontSize":"5vw"}}> I???m Cindy Mo. I???m the vice-president of the RHS Coding club, and I enjoy coding and applying technology to solve problems. I participate in CTFs for fun and to challenge myself.</div>
                        </div>
                        <div className='coVicePresidentMobile'>
                            <img style={{width:"60vw",height:"70vw",}} src="./OfficersPortrait/CoVicePresident-min.jpg"></img>
                            <div style={{"fontSize":"7vw"}}>Vice president: Ryan Nguyen</div>
                            <div style={{"fontSize":"5vw"}}> I???m Ryan Nguyen, co-vice president of the Coding Club, and I love breaking things. I???m self taught in C++/C#, Javascript and others, and have experience in 3d printing and circuit analysis. I want to educate others and better develop the STEM presence at school.</div>
                        </div>
                        <div className='secretaryMobile'>
                            <img style={{width:"60vw",height:"70vw"}} src="./OfficersPortrait/Secretary.png"></img>
                            <div style={{"fontSize":"7vw"}}>Secretary: Mana Harada</div>
                            <div style={{"fontSize":"5vw"}}> I am Mana Harada, the secretary of the RHS coding club. I enjoy biomedical engineering/genetic engineering and apply coding concepts to help me solve problems in those fields. This position will allow me to create connections with others with similar interests who I can exchange ideas with.</div>
                        </div>
                        <div className='treasureMobile'>
                            <img style={{width:"60vw",height:"70vw"}} src="./OfficersPortrait/Treasurer.jpg"></img>
                            <div style={{"fontSize":"7vw"}}>Treasurer: Peilin Wu</div>
                            <div style={{"fontSize":"5vw"}}>I???m Peilin Wu, the current treasurer of the RHS Coding club. I enjoy the process of solving math problems and applying it to certain aspects of coding. My wish to share my interests that drove me to this position in this club. </div>
                        </div>
                        <div className='historianMobile'>
                            <img style={{width:"60vw",height:"70vw"}} src="./OfficersPortrait/Historian.JPEG"></img>
                            <div style={{"fontSize":"7vw"}}>Historian: Freddie Liang</div>
                            <div style={{"fontSize":"5vw"}}>My name is Freddie Liang and I am the Historian of the roosvelt coding club. I enjoy tinkering with things and appraoching problems I encounter with an emperical approach. I hope I can meet more like minded individuals and together we can help create solutions for our communities problems.</div>
                        </div>
                        <div className='socialAddMobile'>
                            <div style={{"fontSize":"7vw"}}>Want To Know Us More or Get In Contact?</div>
                            <div style={{"fontSize":"5vw"}}>Visit our instagram page <a target="_blank" href='https://www.instagram.com/rhscodingclub/'>here</a> to learn more about what we're doing or to simply check us out. If you need to get in contact with us shoot an email at <div  style={{textDecoration:"underline"}}>rooseveltcodingclub@gmail.com</div> and we'll be sure to respond as soon as possible!</div>
                        </div>
                        
                    </div>

                </div>

                <div className='BottomBaseAboutMobile'>
                    <div style={{"fontSize":"4vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, excluding modules, are written entirely by Jaxon Poentis. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"20vw","height":"20vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>
        </>
        
    )
}

export default function AboutUs(props)
{
    return (
        <>
            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
}