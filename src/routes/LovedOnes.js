import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import LovedOnes from '../components/lovedOnes/LovedOnes'
import LovedOnesSection1 from '../components/lovedOnes/LovedOnesSection1'

const LovedOnesPage = () => {
  return (
    <>
          <Navbar /> 
          <LovedOnes />
          <LovedOnesSection1 />
          <ContactForm />
          <Footer />

    </>
  )
}

export default LovedOnesPage
