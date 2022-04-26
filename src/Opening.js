import { useState,useEffect, useRef } from 'react';
import OpeningBackground from './OpeningBackground';
import "./Opening.css"

function Computer(props)
{

    

    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            <div style={{top:"25%"}} className='ClubTitle'>
                Roosevelt STEM
                <div style={{fontSize:"4vw"}}>Clubs</div>
            </div>

            <div style={{"zIndex":"-2", backgroundImage: "linear-gradient(to bottom, #05367a, #322354, #2f1632, #1f0d18, #000000)", position:"absolute", "top":"0", "left":"50%", height:"100%","width":"50%"} }>

            </div>
            <div style={{"zIndex":"-2", backgroundImage: "linear-gradient(to bottom, #c87c1b, #af4d3f, #78354a, #3b2639, #111111)", position:"absolute", "top":"0", "right":"50%", height:"100%","width":"50%"} }>

            </div>

            <a href='/CodingClub' className={"codingEnter"}>The Coding Club</a>
            <a href='/RoboticsClub' className={"RoboticsEnter"}>The Robotics Club</a>

        </>
        
    )
}

function Mobile(props)
{     

    return(
        <>
           <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Teko&display=swap');
            </style> 
            
            <div style={{top:"25%"}} className='ClubTitleMobile'>
                Roosevelt STEM
                <div style={{fontSize:"8vw"}}>Clubs</div>
            </div>

            <div style={{"zIndex":"-2", backgroundImage: "linear-gradient(to bottom, #05367a, #322354, #2f1632, #1f0d18, #000000)", position:"absolute", "top":"0", "left":"50%", height:"100%","width":"50%"} }>

            </div>
            <div style={{"zIndex":"-2", backgroundImage: "linear-gradient(to bottom, #c87c1b, #af4d3f, #78354a, #3b2639, #111111)", position:"absolute", "top":"0", "right":"50%", height:"100%","width":"50%"} }>

            </div>

            <a href='/CodingClub' className={"codingEnter"}>The Coding Club</a>
            <a href='/RoboticsClub' className={"RoboticsEnter"}>The Robotics Club</a>
            
        </>
        
    )
}

export default function Opening(props)
{
    return (
        <>
            <OpeningBackground/>
            {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <Mobile/> :<Computer/>}
            
        </>
    )
    
}