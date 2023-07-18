import React from 'react'
import './WhereWeServe.css'
import Splatter3 from '../../assets/splatter3.png'

const WhereWeServe = () => {
    return (
        <>
        <div className='wws container'>

                <div className="wws-content">
                    <div className='wws-content-img'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    <h1>Where We Serve</h1>
            </div>
        </div>

        

        <div className='wws-locations container'>
                <h2>Location1</h2>
                <h2>Location2</h2>
                <h2>Location3</h2>
                <h2>Location4</h2>

            </div>

</>

    )
}

export default WhereWeServe
