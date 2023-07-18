import React from 'react'
import './Section1.css'
import individual from '../../assets/section1-card2.png'
import family from '../../assets/section1-card1.png'
import Rainbow from '../../assets/rainbow.png'

import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';


const Section1 = () => {
  return (
    <>
      <div className='section1 container'>
                    <div className='rainbow'>
                        <img src={ Rainbow } alt="individual therapy" loading="lazy"/>
                    </div>

        <div className='section1-content'>


              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/individual">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ individual } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>For Individual</h1>
                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/loved-ones">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ family } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>For Loved Ones</h1>
                    </div>
                </div>
              </Link>
              </LinkRoll>



        </div>

      </div>
    </>
  )
}

export default Section1
