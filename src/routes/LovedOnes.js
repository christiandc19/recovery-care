import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import LovedOnes from '../components/lovedOnes/LovedOnes'
import LovedOnesSection1 from '../components/lovedOnes/LovedOnesSection1'
import LovedOnesSection2 from '../components/lovedOnes/LovedOnesSection2'
import LovedOnesSection3 from '../components/lovedOnes/LovedOnesSection3'
import ContactCards from '../components/contact/ContactCards'

const LovedOnesPage = () => {
  return (
    <>
          <Navbar /> 
          <LovedOnesSection2 />
          <LovedOnesSection1 />
          <LovedOnes />
          <LovedOnesSection3 />
          <ContactForm />
          <ContactCards />
          <Footer />

    </>
  )
}

export default LovedOnesPage
