import React from 'react'
import './Individual2.css'
import Individual2IMG1 from '../../assets/individual2.jpg'
import Splatter from '../../assets/splatter-yellow.png'
import Splatter3 from '../../assets/splatter3.png'

const Individual2 = () => {
  return (
    <>
        <div className='individual2 container'>
            <div className='individual2-content'>
                <div className='individual2-header'>
                    <h1>A circle of care with you at the center</h1>
                </div>

                <div className='individual2-flex'>

                    <div className='individual2-left'>
                        <div className='individual2-images'>
                            <img src={ Individual2IMG1 } alt="individual therapy" loading="lazy"/>
                        <div className='individual2-accent'>
                            <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                        </div>
                        {/* <div className='individual2-accent2'>
                            <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div> */}
                        </div>
                    </div>

                    <div className='individual2-right'>
                            <div className='individual2-right-content'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                <div className='individual2-right-caption'>
                                    <h1>"My advisor and I began building my recovery blueprint."</h1>
                                </div>
                            </div>
                    </div>

                </div>


            </div>
        </div>
    </>
  )
}

export default Individual2