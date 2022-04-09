import { useFrame } from '@react-three/fiber';
import { useState,useEffect } from 'react';
import './Main.css';

export default function Main(props)
{
   

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
                    <div style={{"padding":"1vw", "font-size":"1.5vw"}} >  <img style={{"width":"50%", "float":"right", "padding-left":"20px"}} src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'></img>This club started from a group of passionate students wanting to share their fondness for coding. The club's purpose is to give students the knowledge and tools to fulfill their passions through software development. Members will learn how to program in modern languages to engage in competitions, create projects, and fulfill one's passion. Meetings will consist of students learning different aspects of computer science from networking, algorithms, game development, and more. We wish to give students more opportunities to find their footing in the computer science world and share creative ideas with their community.
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

                </div>

                <div className='toJoin'>
                    
                </div>
            </div>
        </>
        
    )
}