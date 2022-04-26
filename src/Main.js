
import { useState,useEffect, useRef } from 'react';
import './Main.css';
import Background from './Background';
import './MainMobile.css';


function Computer(props)
{
    
    const [loaded, load] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [year, setYear] = useState()


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
        
        const y = window.pageYOffset;
        yRef.current = y;
        
        try{
            fetch(`${window.location.protocol}//${window.location.host}/api/getRecentEvent`, {
            method:"GET",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=>res.json())
        .then(data =>
            {
                
                console.log(data)
            
                setName(data.name)
                const date =new Date(data.eventDate);
                setDescription(data.description)
                setImage(data.imageLink)
                setDay(date.getDate())
                setMonth(date.getMonth())
                setYear(date.getFullYear())
                load(true)

            });
        }
        catch
        {

            setName("Could not load data :(")

            load(true)
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
            
            <div  className='ClubTitle'>
                The Coding Club
                <div style={{fontSize:"4vw"}}>Roosevelt Highschool</div>
            </div>
            <div ref={headerElement} className='links'>

                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            <div ref={fixedHeaderElement} className='fixedLinks'>

                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            

            <div className='container' style={{position:'absolute',color:"white"}}>
                <div className='doing'>
                    <span style={{"fontWeight":"bold", "fontSize":"3vw"} }>What is the Coding Club?</span>
                    <div style={{"padding":"1vw", "font-size":"1.7vw"}} > 
                     <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src="./CodingClubPic.png"></img>This club started from a group of passionate students wanting to share their fondness for coding. The club's purpose is to give students the knowledge and tools to fulfill their passions through software development. Members will learn how to program in modern languages to engage in competitions, create projects, and fulfill one's passion. Meetings will consist of students learning different aspects of computer science from networking, algorithms, game development, and more. We wish to give students more opportunities to find their footing in the computer science world and share creative ideas with their community.
                </div>
                    
                </div>
                <div className='lang'>
                    <div style={{"textAlign":"center", "font-weight":"bold", "font-size":"3vw"} }>What Tools Do We Use?</div>
                    <div style={{"display":"grid", "gridTemplateColumns":"repeat(20,5%)", "gridTemplateRows":"repeat(20,1%)" }}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' style={{"width":"10vw","height":"11vw" ,gridColumnStart:"2"}}></img>
                        <img  src='https://cdn.worldvectorlogo.com/logos/c--4.svg' style={{"gridColumnStart":"5","float":"right", "width":"11vw","height":"11vw" }}></img>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' style={{marginTop:"3vw","gridColumnStart":"8","width":"15vw","height":"4vw" }}></img>
                        
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' style={{"gridColumnStart":"12","float":"right", "width":"10vw","height":"10vw" }}></img>
                        <img src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' style={{marginTop:"1.5vw",marginLeft:"3vw","gridColumnStart":"14","float":"left", "width":"15vw","height":"8vw" }}></img>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' style={{"gridColumnStart":"18","float":"left", "width":"12vw","height":"11vw" }}></img>    
                    </div>
                    
                    
                </div>
                <div className='Socials'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Socials</div>
                    <div style={{"textAlign":"center", "height":"6vw","padding":"0.5vw"}}>
                        <img src="./icons/discordLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}}target="_blank" href='https://discord.gg/nJJ3vR6WQC'>Discord</a>
                    <div style={{"textAlign":"center", "height":"6vw", "padding":"0.5vw"}}>
                        <img src="./icons/instagramLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}} target="_blank" href='https://www.instagram.com/rhscodingclub/'>Instagram</a>
                    <div style={{"textAlign":"center", "height":"6vw", "padding":"0.5vw"}}>
                        <img src="./icons/youtubeLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}} target="_blank" href='https://www.youtube.com/channel/UCqakvmaEw3OYRjkpY1gXKag'>Youtube</a>
                </div>
                <div className='Meeting'>
                <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Where Do We Meet?</div>
                <div style={{"padding":"1vw", "font-size":"1.7vw"}} >
                <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src='./ROOM.JPG'></img>The Coding Club meets Tuesdays and Thursdays afterschool in room F103 with meetings lasting 1-2 hours. We will have different activities for students based on their ability and interests. Students new to programming will learn the aspects of computer science and coding principles. Those with experience will focus on creating projects in fields they are interested in such as webapps or machine learning projects. Outside of school, the club will use discord as the main method of communication with events being posted on discord and this website. Most competitions will be online so those will either be completed at home or at school. Any In-person competitions will require a parent signature. If any events, online or in-person, interfere with school hours then teacher and principal signatures will also be required.</div>
                </div>

                <div className='toJoin'>
                <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Where Do I Get Started?</div>
                <div style={{"fontSize":"2vw"}}>If you’re interested in joining the coding club then the first step to take is to fill out the registration forms. These forms along with more registration information can be found in our <a href="/Registration">Registration Page</a>. If you need further more explicit information about our club then check out our <a href="/Resources">Resources Page</a>. Get to know our officers and the club more at the <a href="/AboutUs">About Us</a> page. Curious to see what events are coming up? Be sure to check out our <a href="/Events">Events Page</a>. We are excited to see you be a part of our coding community! Manifest inspiration into 1s and 0s! </div>
                </div>
                

                <div className='Annoucements'>
                    <div style={{"textAlign":"center","overflow":"clip","fontWeight":"bold", "fontSize":"3vw"} }>Recent Annoucement</div>
                    {!loaded ? <div style={{"fontSize":"2.5vw"}}>Loading . . .</div>
                    :
                        <div >
                            <img style={{"width":"12vw", "height":"12vw"}} src={image}></img>
                            <div style={{"fontSize":"3vw","textDecoration":"underline"}}>{name}</div>
                            <div style={{"fontSize":"2vw"}}>Event Date: {month}/{day}/{year}</div>
                            <div className='descriptionEventMain' style={{"fontSize":"2vw"}}>Description: {description}</div>
                        </div>
                    }
                </div>

                <div className='BottomBase'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the Jaxon Poentis, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, exclduing modules, are written entirely by the President of this club. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"4.5vw","height":"4.5vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>
        </>)
}


function Mobile(props)
{
    
    const [loaded, load] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [year, setYear] = useState()


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
        window.addEventListener("scroll", handleScroll)
        
        const y = window.pageYOffset;
        yRef.current = y;
        
        try{
            fetch(`${window.location.protocol}//${window.location.host}/api/getRecentEvent`, {
            method:"GET",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=>res.json())
        .then(data =>
            {
                
                console.log(data)
            
                setName(data.name)
                const date =new Date(data.eventDate);
                setDescription(data.description)
                setImage(data.imageLink)
                setDay(date.getDate())
                setMonth(date.getMonth())
                setYear(date.getFullYear())
                load(true)

            });
        }
        catch
        {

            setName("Could not load data :(")

            load(true)
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
            
            <div  className='ClubTitleMobile'>
                The Coding Club
                <div style={{fontSize:"6vw"}}>Roosevelt Highschool</div>
            </div>
            <div ref={headerElement} className='linksMobile'>

                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            <div ref={fixedHeaderElement} className='fixedLinksMobile'>

                <a href='/CodingClub/'>Home</a>
                <a href="/CodingClub/AboutUs">About Us</a>
                <a href="/CodingClub/Registration">Registration</a>
                <a href="/CodingClub/Events">Events</a>
                <a href="/CodingClub/Resources">Resources</a>
            </div>

            

            <div className='containerMobile' style={{position:'absolute',color:"white"}}>
                <div className='doingMobile'>
                    <span style={{"fontWeight":"bold",textAlign:"center",  "fontSize":"10vw"} }>What is the Coding Club?</span>
                    <div style={{"padding":"1vw", "font-size":"5vw"}} > 
                     <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src='./CodingClubPic.png'></img>This club started from a group of passionate students wanting to share their fondness for coding. The club's purpose is to give students the knowledge and tools to fulfill their passions through software development. Members will learn how to program in modern languages to engage in competitions, create projects, and fulfill one's passion. Meetings will consist of students learning different aspects of computer science from networking, algorithms, game development, and more. We wish to give students more opportunities to find their footing in the computer science world and share creative ideas with their community.
                </div>
                    
                </div>
                <div className='langMobile'>
                    <span style={{"font-weight":"bold","textAlign":"center", "font-size":"10vw"} }>What Tools Do We Use?</span>
                    <p></p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' style={{"width":"20vw","height":"20vw" }}></img>
                    <img src='https://cdn.worldvectorlogo.com/logos/c--4.svg' style={{"float":"right", "width":"20vw","height":"20vw" }}></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' style={{"width":"35vw","height":"10vw" }}></img>
                    
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' style={{"float":"right", "width":"20vw","height":"20vw" }}></img>
                    <img src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' style={{"float":"left", "width":"30vw","height":"16vw" }}></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' style={{"float":"left", "width":"22vw","height":"21vw" }}></img>
                    
                    
                </div>
                
                    <div className='MeetingMobile'>
                <div style={{"fontWeight":"bold", "fontSize":"10vw"} }>Where Do We Meet?</div>
                <div style={{"padding":"1vw", "font-size":"6vw"}} >
                <img style={{"width":"100%", "float":"right", "padding-bottom":"20px"}} src='./ROOM.JPG'></img>The Coding Club meets Tuesdays and Thursdays afterschool in room F103 with meetings lasting 1-2 hours. We will have different activities for students based on their ability and interests. Students new to programming will learn the aspects of computer science and coding principles. Those with experience will focus on creating projects in fields they are interested in such as webapps or machine learning projects. Outside of school, the club will use discord as the main method of communication with events being posted on discord and this website. Most competitions will be online so those will either be completed at home or at school. Any In-person competitions will require a parent signature. If any events, online or in-person, interfere with school hours then teacher and principal signatures will also be required.</div>
                </div>

                <div className='SocialsModile'>
                    <div style={{"fontWeight":"bold", "fontSize":"10vw",gridColumn:"20",textAlign:"center"} }>Socials</div>
                    <div style={{ gridColumn:"2",gridRowStart:"4","height":"13vw","padding":"0.5vw"}}>
                        <img src="./icons/discordLogo.png"
                        style={{"width":"12vw","height":"12vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"5vw",float:"left",gridColumn:"2",gridRowStart:"8",}}target="_blank" href='https://discord.gg/nJJ3vR6WQC'>Discord</a>
                    <div style={{"textAlign":"center", "height":"6vw", "padding":"0.5vw",gridColumn:"23",gridRowStart:"4"}}>
                        <img src="./icons/instagramLogo.png"
                        style={{"width":"12vw","height":"12vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"5vw",gridColumn:"22",gridRowStart:"8"}} target="_blank" href='https://www.instagram.com/rhscodingclub/'>     Instagram</a>
                    <div style={{"textAlign":"center", "height":"6vw", "padding":"0.5vw",gridColumn:"43",gridRowStart:"4"}}>
                        <img src="./icons/youtubeLogo.png"
                        style={{"width":"12vw","height":"12vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"5vw",gridColumn:"43",gridRowStart:"8"}} target="_blank" href='https://www.youtube.com/channel/UCqakvmaEw3OYRjkpY1gXKag'>Youtube</a>
                </div>
                
                <div className='toJoinMobile'>
                <div style={{"fontWeight":"bold", "fontSize":"7vw"} }>Where Do I Get Started?</div>
                <div style={{"fontSize":"5vw"}}>If you’re interested in joining the coding club then the first step to take is to fill out the registration forms. These forms along with more registration information can be found in our <a href="/Registration">Registration Page</a>. If you need further more explicit information about our club then check out our <a href="/Resources">Resources Page</a>. Get to know our officers and the club more at the <a href="/AboutUs">About Us</a> page. Curious to see what events are coming up? Be sure to check out our <a href="/Events">Events Page</a>. We are excited to see you be a part of our coding community! Manifest inspiration into 1s and 0s! </div>
                </div>
                

                <div className='AnnoucementsMobile'>
                    <div style={{"fontWeight":"bold", "fontSize":"10vw"} }>Recent Annoucement</div>
                    {!loaded ? <div style={{"fontSize":"6vw"}}>Loading . . .</div>
                    :
                        <div>
                            <img style={{"width":"30vw", "height":"30vw"}} src={image}></img>
                            <div style={{"fontSize":"8vw","textDecoration":"underline"}}>{name}</div>
                            <div style={{"fontSize":"7vw"}}>Event Date: {month}/{day}/{year}</div>
                            <div className='descriptionEventMain' style={{"overflow":"clip", "fontSize":"7vw"}}>Description: {description}</div>
                        </div>
                    }
                </div>

                <div className='BottomBaseMobile'>
                    <div style={{"fontSize":"4vw"}}>This Website was made by Jaxon Poentis, the Jaxon Poentis, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, exclduing modules, are written entirely by the President of this club. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"20vw","height":"20vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>
        </>)
}


export default function Main(props)
{
   
    return (
        <>

        <Background/>
            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
}