import './Main.css';

export default function Main()
{
    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
            </style> 
            <div className='container' style={{position:'absolute',color:"white"}}>
                
            </div>
            <div className='ClubTitle'>
                The Coding Club
            </div>
            <div className='links'>
                <a href="/AboutUs">About Us</a>
                <a href="/Registration">Registration</a>
                <a href="/Events">Events</a>
                <a href="/Resources">Resources</a>
            </div>
        </>
        
    )
}