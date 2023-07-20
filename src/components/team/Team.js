import React from 'react'
import Splatter3 from '../../assets/splatter3.png'

import './Team.css'



const Team = () => {
    return (
<>
<div className='team container'>
        <div className="team-content">
            <h1>Our Team</h1>
                <div className='team-accent'>
                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                </div>
        </div>
    </div>
</>
)
}

export default Team