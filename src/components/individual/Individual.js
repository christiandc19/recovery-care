import React from 'react'
import './Individual.css'

import opioidSection1 from '../../assets/opioidSection1.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter3 from '../../assets/paint-navy.png'

const Individual = () => {
  return (
    <>
      <div className='individual container'>
        <div className='individual-content'>



        <div className='individual-flex'>
                    <div className='individual-left'>
                        <div className='individual-images'>
                            <img src={ opioidSection1 } alt="individual therapy" loading="lazy"/>

                                <div className='individual-accent'>
                                    <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                                </div>
                                <div className='individual-accent2'>
                                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                </div>
                        </div>
                    </div>

                    <div className='individual-right'>
                        <div className='individual-header'>
                        <h1>How we help</h1>
                        </div>
                    
                        <p>Aware offers a state-of-the-art alternative to traditional rehab care. Our dedicated team helps clients navigate their individual recovery plan using a range of proven tools, from 12-step programs and medically assisted treatment (MAT), to mindfulness, family therapy, nutrition, yoga, and more.</p>
                    </div>
                </div>

        </div>
      </div>
    </>
  )
}

export default Individual
