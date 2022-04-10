import { useFrame } from '@react-three/fiber';
import { useState,useEffect } from 'react';
import './Main.css';



export default function Main(props)
{
   

    const [loaded, load] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [year, setYear] = useState()

    useEffect(() => 
    {
        console.log(`${window.location.protocol}//${window.location.host}/api/getRecentEvent`)
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
            </div>
            <div className='links'>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>
            <div className='container' style={{position:'absolute',color:"white"}}>
                <div className='doing'>
                    <span style={{"fontWeight":"bold", "fontSize":"3vw"} }>What is the Coding Club?</span>
                    <div style={{"padding":"1vw", "font-size":"1.7vw"}} > 
                     <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'></img>This club started from a group of passionate students wanting to share their fondness for coding. The club's purpose is to give students the knowledge and tools to fulfill their passions through software development. Members will learn how to program in modern languages to engage in competitions, create projects, and fulfill one's passion. Meetings will consist of students learning different aspects of computer science from networking, algorithms, game development, and more. We wish to give students more opportunities to find their footing in the computer science world and share creative ideas with their community.
                </div>
                    
                </div>
                <div className='lang'>
                    <span style={{"font-weight":"bold", "font-size":"3vw"} }>What Tools Do We Use?</span>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' style={{"width":"10vw","height":"11vw" }}></img>
                    <img src='https://cdn.worldvectorlogo.com/logos/c--4.svg' style={{"float":"right", "width":"10vw","height":"10vw" }}></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' style={{"width":"15vw","height":"4vw" }}></img>
                    
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' style={{"float":"right", "width":"10vw","height":"10vw" }}></img>
                    <img src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' style={{"float":"left", "width":"12vw","height":"6vw" }}></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' style={{"float":"left", "width":"12vw","height":"11vw" }}></img>
                    
                    
                </div>
                <div className='Socials'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Socials</div>
                    <div style={{"textAlign":"center", "padding":"0.5vw"}}>
                        <img src="./icons/discordLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}}target="_blank" href='https://discord.gg/nJJ3vR6WQC'>Discord</a>
                    <div style={{"textAlign":"center", "padding":"0.5vw"}}>
                        <img src="./icons/instagramLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}} target="_blank" href='https://www.instagram.com/rhscodingclub/'>Instagram</a>
                    <div style={{"textAlign":"center", "padding":"0.5vw"}}>
                        <img src="./icons/youtubeLogo.png"
                        style={{"width":"6vw","height":"6vw"}}
                        ></img>
                         
                    </div>
                    <a style={{"fontSize":"2vw"}} target="_blank" href='https://www.youtube.com/channel/UCqakvmaEw3OYRjkpY1gXKag'>Youtube</a>
                </div>
                <div className='Meeting'>
                <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Where Do We Meet?</div>
                <div style={{"padding":"1vw", "font-size":"1.7vw"}} >
                <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src='./discordscreenshot.png'></img>The Coding Club meets Tuesdays and Thursdays afterschool in room F103 with meetings lasting 1-2 hours. We will have different activities for students based on their ability and interests. Students new to programming will learn the aspects of computer science and coding principles. Those with experience will focus on creating projects in fields they are interested in such as webapps or machine learning projects. Outside of school, the club will use discord as the main method of communication with events being posted on discord and this website. Most competitions will be online so those will either be completed at home or at school. Any In-person competitions will require a parent signature. If any events, online or in-person, interfere with school hours then teacher and principal signatures will also be required.</div>
                </div>

                <div className='toJoin'>
                <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Where Do I Get Started?</div>
                <div style={{"fontSize":"2vw"}}>If you’re interested in joining the coding club then the first step to take is to fill out the registration forms. These forms along with more registration information can be found in our <a href="/Registration">Registration Page</a>. If you need further more explicit information about our club then check out our 
                <a href="/Resources">Resources Page</a>. Want to know the officers and the club more then check out the <a href="/AboutUs">About Us Page</a>. Curious to see what events are coming up? Be sure to check out our <a href="/Events">Events Page</a>. We are excited to see you be a part of our coding community! Manifest inspiration into 1s and 0s! </div>
                </div>
                

                <div className='Annoucements'>
                    <div style={{"fontWeight":"bold", "fontSize":"3vw"} }>Recent Annoucements</div>
                    {!loaded ? <div style={{"fontSize":"2.5vw"}}>Loading . . .</div>
                    :
                        <div>
                            <img style={{"width":"12vw", "height":"12vw"}} src={image}></img>
                            <div style={{"fontSize":"3vw","textDecoration":"underline"}}>{name}</div>
                            <div style={{"fontSize":"2vw"}}>Event Date: {month}/{day}/{year}</div>
                            <div style={{"fontSize":"2vw"}}>Description: {description}</div>
                        </div>
                    }
                </div>

                <div className='BottomBase'>
                    <div style={{"fontSize":"1.3vw"}}>This Website was made by Jaxon Poentis, the President of The Coding Club, and is powered by React and Expressjs using Nodejs as the runtime enviornment. All <a style={{color:"white"}} target="_blank" href='https://github.com/jaximus808/CodingClubWebsite'>Source Code</a>, exclduing modules, are written entirely by the President of this club. Any similarities in design are purely coincidental. Any information or images of members and officers are used with consent. Information about this can be found more in our resources page. </div>
                    <img style={{"width":"5vw","height":"5vw"}} src='./codingClubLogo.png'></img>
                </div>
            </div>
        </>
        
    )
}