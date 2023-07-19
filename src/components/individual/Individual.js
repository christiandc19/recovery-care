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
                        <p>We don’t just drop you back into the “real world"...</p>
                        <h2>Because you never leave it.</h2>
                        <p>Lasting recovery from addiction is possible. We bring holistic, compassionate, and evidence-based care to you, so you have the best chance to achieve sustainable recovery.</p>
                    </div>
                </div>

        </div>
      </div>
    </>
  )
}

export default Individual
