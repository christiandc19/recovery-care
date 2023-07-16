import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIOID from '../components/Addiction-Opioid/Opioid'
import OpioidSection1 from '../components/Addiction-Opioid/OpioidSection1'
import ContactForm from '../components/contact/ContactForm'
import OpioidSection2 from '../components/Addiction-Opioid/OpioidSection2'
import OpioidSection3 from '../components/Addiction-Opioid/OpioidSection3'

const Opioid = () => {
  return (
    <>
    <Navbar /> 
    <OPIOID />
    <OpioidSection1 />
    <OpioidSection2 />
    <OpioidSection3 />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Opioid