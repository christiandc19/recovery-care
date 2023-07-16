import React from 'react'
import './Hero.css'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom'
// import { Link as LinkRoll } from 'react-scroll'




const Hero = () => {
    return (
<>        
<div className='hero container'>
    <div className="hero-container">

        <div className="content">
                <Fade left>
                <h1>In-home Addiction & Mental Health Treatment</h1>
                </Fade>
                <Fade right>
                <p>You don’t need to put your life on hold.</p>
                <p>We bring addiction treatment to you so you can heal at home.</p>
                </Fade>
        </div>

    </div>
</div>
</>

    )
}

export default Hero