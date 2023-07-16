import React from 'react'
import './Alcohol1.css'

import Alcohol2IMG from '../../assets/alcohol2img.jpg'

import Section2IMG from '../../assets/alcohol1IMG.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/splatter3.png'


const Alcohol1 = () => {
  return (
    <>
            <div className='alcohol1 container'>




{/* ALCOHOL 1 */}

                <div className='alcohol1-flex'>
                    <div className='alcohol1-left'>
                        <h1>If you are struggling, we can help.</h1>
                        <p>Our In-Home Addiction Treatment (IHAT) program is exactly what it sounds like. We deliver an all-inclusive addiction treatment program directly to you, so you don’t have to leave your home or disrupt your life.</p>

        
                        <p>You will be assigned a team of IHAT professionals that will come to your home and work around your schedule. Tailored for lasting recovery, the treatment process has 4 phases over the course of up to 12 months. </p>
               
                        <p>Our clients’ success stories are the best proof of our model’s effectiveness. So are our current clinical outcomes.</p>
                    </div>


                    <div className='alcohol1-right'>
                        <div className='alcohol1-images'>
                            <img src={ Section2IMG } alt="individual therapy" loading="lazy"/>

                            <div className='alcohol1-accent'>
                                <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='alcohol1-accent2'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>


{/* ALCOHOL 2 */}


                <div className='alcohol2-flex'>
                    <div className='alcohol2-left'>
                        <div className='alcohol2-images'>
                            <img src={ Alcohol2IMG } alt="individual therapy" loading="lazy"/>

                                <div className='alcohol2-accent'>
                                    <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                                </div>
                                <div className='alcohol2-accent2'>
                                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                </div>
                        </div>
                    </div>

                    <div className='alcohol2-right'>
                        <h1>Life isn’t linear.
                            Neither is our treatment model.</h1>
                        <p>We tailor our approach to address your needs.</p><br />
                        <p>Our In-Home Addiction Treatment (IHAT) based model is supportive, nonjudgmental, and compassionate.</p>
                    </div>
                </div>


            </div>
    </>
  )
}

export default Alcohol1
