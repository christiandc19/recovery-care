import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import Fade from 'react-reveal/Fade';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<div className="contact-form container">

<div className="contact-container">
    <div className="contact-cards-container">
          <div class="get_form_inner2">
              <h2>CALL US</h2>
              <p><AiOutlinePhone /><a href="tel:3235792196"> +1 (323) 579-2196</a></p>
          </div>

          <div class="get_form_inner2">
            <h2>EMAIL</h2>
            <p><AiOutlineMail /> info@20thStreetDetox.com  </p><br />
          </div>

          <div class="get_form_inner2">
            <h2>LOCATION</h2>
            <p><BsFillPinMapFill /> 1045 20th St, Los Angeles CA 90011</p>
          </div>
    </div>


    <div class="get_form_inner">

            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>
              </div>

              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="8" required></textarea>
                <input type="submit" value="Submit" />
              </div>
            </form>
    </div>

</div>
</div>

        </>
    )
}

export default ContactForm