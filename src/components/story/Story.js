import React from 'react'
import './Story.css'
import Splatter3 from '../../assets/splatter3.png'



const Story = () => {
    return (

<>

        <div className='story container'>
                <div className="story-content">
                    <h1>Our Story</h1>
                        <div className='story-accent'>
                            <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div>
                </div>
            </div>
</>
    )
}

export default Story
