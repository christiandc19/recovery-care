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
                            <h1>For Loved Ones</h1>
                        </div>
                    </div>
                </div>

        </div>
      </div>
    </>
  )
}

export default LovedOnes
