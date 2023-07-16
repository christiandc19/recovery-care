import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import Alcohol1 from '../components/Addiction-Alcohol/Alcohol1'
import ContactForm from '../components/contact/ContactForm'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <Alcohol1 />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Alcohol