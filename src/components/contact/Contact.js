import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu container'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>Contact a Recovery <br/>Specialist today</h1>
            </Fade>
            <Fade right>
                  <p>We’ll help you determine whether at <br/>home care is right for you.</p>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact