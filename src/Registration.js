import { useFrame } from '@react-three/fiber';
import { useState,useEffect, useRef } from 'react';
import './Registration.css';
import './RegistrationMobile.css'
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
            {(lowPower) ? <Background/>: <LowPowerBack/>}
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

            

            <div className='containerRegistration' style={{position:'absolute',color:"white"}}>
            <div style={{top:"25%"}} className='ClubTitle'>
                The Coding Club
                <div style={{fontSize:"4vw"}}>Registration</div>
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

               <div className='HowtoJoin'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>How do I Join?</div>
                        
                    <div style={{ "fontSize":"2vw"} }>If you’re interested in joining our club then the first step is to fill out our google form <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkHJoEtbDBy4Mm-wzcRvTYowHsG7TTv7YN-DV9PUA9-AnzNw/viewform?usp=sf_link'>here</a>. The next step is to join our discord server <a href='https://discord.gg/nJJ3vR6WQC'>here</a>. Discord will be the main outlet for communication of events and important information. Our discord server will have a registration process to be able to access its content and more information can be found in said discord server. Interested students may join at any time however the club will not stop its lessons to accommodate that member. This policy will be further explained in our Resources page. Emails will be sent to members when our first meeting begins.</div>
                </div>

                <div className='NeedToJoin'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"}}>Question and Answers</div>   

                    <div style={{ "fontSize":"2.5vw"}}>What do I need to join?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>Anyone will be able to join. We prefer you to have your own laptop, but it is not required and more information may be found in the question below. There are not any academic requirements to join, however this club will be a commitment. Learning how to code is not extremely difficult but it requires dedication. Our schedule is posted in the events tab and be ready to join with a growthmindset. </div>

                    <div style={{ "fontSize":"2.5vw"}}>What if I don't have a laptop?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>Access to a laptop is not required to join. However we only have a limited amount of laptops available. In the event that we do not have access to enough laptops then we will have to prioritize those who have registered earlier. Chromebooks will be then used by those who have joined late without access to a laptop.</div>

                    <div style={{ "fontSize":"2.5vw"}}>How much money must I pay to join?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>There are no fees to join our club initially. The only time we may ask for money is for your participation in an event or a type of paid for service such as hosting. Events requiring traveling will also not be covered by the club and we will require members to cover their own expenses. However, laptops will be given out for free to those who do not have access to them provided by our club advisor.</div>
                    <div style={{ "fontSize":"2.5vw"}}>What are the club policies?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>This information may be found in our resources tab. Ammendements may be added based on a voting process described in our constitution.</div>
                    
                    <div style={{ "fontSize":"2.5vw"}}>Who can learn to code?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>Anyone can learn how to code. All you truly need to learn how to code is dedication, creative thinking, and interest. You don't need to be a genius to be successful or create impactful projects.  </div>

                    <div style={{ "fontSize":"2.5vw"}}>What knowledge do I need prior to joining?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>No coding experience is required to jon. For those who want to compete in competitions you will have to show that you understand coding concepts as otherwise you will be wasting your time. Those who are joining with no knowledge will be taught how to code from our officers using C++. More information about this system can be check in our resources page. </div>
                    <div style={{ "fontSize":"2.5vw"}}>Will I need to be good at math?</div>
                    <div style={{ "fontSize":"1.8vw", "paddingLeft":"2vw"}}>Math is not always used when programming. For example if you're a web designer or even creating web servers, you'll normally never run into math besides for some minimal areas. However, math is used to build beautiful and very complicated projects such as machine learning. If you're worried about math then don't sweat as the basic math will be covered if it is ever required.  </div>
                </div>



                <div className='BottomBaseReg'>
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
        <>{(!lowPower) ?<LowPowerBack/> :<Background/>}
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
           

            <div ref={fixedHeaderElement} className='fixedLinksMobile'>
                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            

            <div className='containerRegistrationMobile' style={{position:'absolute',color:"white"}}>
            <div style={{top:"25%"}} className='ClubTitleMobile'>
                The Coding Club
                <div style={{fontSize:"8vw"}}>Registration</div>
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
               <div className='HowtoJoinMobile'>
                    <div style={{"fontWeight":"bold", "fontSize":"7vw", "textAlign":'center'} }>How do I Join?</div>
                        
                    <div style={{ "fontSize":"5vw"} }>If you’re interested in joining The Roosevelt Coding Club then the first step is to fill out our google form <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkHJoEtbDBy4Mm-wzcRvTYowHsG7TTv7YN-DV9PUA9-AnzNw/viewform?usp=sf_link'>here</a>. The next step is to join our discord server <a href='https://discord.gg/nJJ3vR6WQC'>here</a>. Discord will be the main outlet for communication of events and important information. Our discord server will have a registration process to be able to access its content and more information can be found in said discord server. Interested students may join at any time however the club will not stop its lessons to accommodate that member. This policy will be further explained in our Resources page. Emails will be sent to members when our first meeting begins.</div>
                </div>

                <div className='NeedToJoinMobile'>
                    <div style={{"fontWeight":"bold", "fontSize":"7vw", "textAlign":'center'}}>Question and Answers</div>   

                    <div style={{ "fontSize":"6vw"}}>What do I need to join?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>Anyone will be able to join. We prefer you to have your own laptop, but it is not required and more information may be found in the question below. There are not any academic requirements to join, however this club will be a commitment. Learning how to code is not extremely difficult but it requires dedication. Our schedule is posted in the events tab and be ready to join with a growthmindset. </div>

                    <div style={{ "fontSize":"6vw"}}>What if I don't have a laptop?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>Access to a laptop is not required to join. However we only have a limited amount of laptops available. In the event that we do not have access to enough laptops then we will have to prioritize those who have registered earlier. Chromebooks will be then used by those who have joined late without access to a laptop.</div>

                    <div style={{ "fontSize":"6vw"}}>How much money must I pay to join?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>There are no fees to join our club initially. The only time we may ask for money is for your participation in an event or a type of paid for service such as hosting. Events requiring traveling will also not be covered by the club and we will require members to cover their own expenses. However, laptops will be given out for free to those who do not have access to them provided by our club advisor.</div>
                    <div style={{ "fontSize":"6vw"}}>What are the club policies?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>This information may be found in our resources tab. Ammendements may be added based on a voting process described in our constitution.</div>
                    
                    <div style={{ "fontSize":"6vw"}}>Who can learn to code?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>Anyone can learn how to code. All you truly need to learn how to code is dedication, creative thinking, and interest. You don't need to be a genius to be successful or create impactful projects. </div>

                    <div style={{ "fontSize":"6vw"}}>What knowledge do I need prior to joining?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>No coding experience is required to jon. For those who want to compete in competitions you will have to show that you understand coding concepts as otherwise you will be wasting your time. Those who are joining with no knowledge will be taught how to code from our officers using C++. More information about this system can be check in our resources page. </div>
                    <div style={{ "fontSize":"6vw"}}>Will I need to be good at math?</div>
                    <div style={{ "fontSize":"4.5vw", "paddingLeft":"2vw", "paddingBottom":"5vw"}}>Math is not always used when programming. For example if you're a web designer or even creating web servers, you'll normally never run into math besides for some minimal areas. However, math is used to build beautiful and very complicated projects such as machine learning. If you're worried about math then don't sweat as the basic math will be covered if it is ever required.  </div>
                </div>



                <div className='BottomBaseRegMobile'>
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