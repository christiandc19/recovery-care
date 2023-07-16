import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SA from '../components/otherSubstances/OtherSubstances'
// import SASection from '../components/otherSubstances/OtherSubstancesSection'
import OS1 from '../components/otherSubstances/OS1'
import OS2 from '../components/otherSubstances/OS2'
import Section5 from '../components/section5/Section5'
import ContactForm from '../components/contact/ContactForm'


const OtherSubstances = () => {
  return (
    <>
    <Navbar /> 
    <SA />
    <OS1 />
    <OS2 />
    <Section5 />
    <ContactForm />
    {/* <SASection /> */}
    <Footer />
     </>
  )
}

export default OtherSubstances