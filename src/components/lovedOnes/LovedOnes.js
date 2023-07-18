import React from 'react'
import './LovedOnes.css'

import opioidSection1 from '../../assets/opioidSection1.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter3 from '../../assets/paint-navy.png'

const LovedOnes = () => {
  return (
    <>
      <div className='lovedOnes container'>
        <div className='lovedOnes-content'>



        <div className='lovedOnes-flex'>
                    <div className='lovedOnes-left'>
                        <div className='lovedOnes-images'>
                            <img src={ opioidSection1 } alt="individual therapy" loading="lazy"/>

                                <div className='lovedOnes-accent'>
                                    <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                                </div>
                                <div className='lovedOnes-accent2'>
                                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                </div>
                        </div>
                    </div>

                    <div className='lovedOnes-right'>
                        <div className='lovedOnes-header'>
                            <h1> How family plays a role in the recovery process.</h1>
                            <p>Families are powerful. As our care teams work to make the home the treatment center, we help our clients’ loved ones identify healthy boundaries and engage the entire family in the recovery process so that everyone can begin to heal.

Our treatment approach is rooted in the idea that when one person in a family shifts toward wellness, everyone else in the family takes a healthy turn as well.</p>
                        </div>
                    </div>
                </div>

        </div>
      </div>
    </>
  )
}

export default LovedOnes
