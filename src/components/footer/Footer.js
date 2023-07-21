import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<> 
        <div className='footer container'>

            <div className="footer-content container">

                <div className="top">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'>
                    <div className="logo-footer">
                        <img src={logo} width="150px" height="60px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </div>
                    </Link>
                        </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>
                </div>


                <div className="col-container">

                    <div className="col">
                        <h3>Navigation</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>Insurance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/individual'><p>Programs</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>Company</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/story'><p>Our Story</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/team'><p>Our Team</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/faq'><p>FAQs</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>Locations</h3>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/los-angeles'><p>Los Angeles</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Location 2</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Location 3</p></Link>
                        </LinkRoll>
                    </div>

                </div>
                <p className='copyright'><p>&copy; 2023 Recovery Care. All rights reserved</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
