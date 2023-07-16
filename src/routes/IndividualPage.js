import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import Individual from '../components/individual/Individual'
import Individual1 from '../components/individual/Individual1'

const IndividualPage = () => {
  return (
    <>
          <Navbar /> 
          <Individual />
          <Individual1 />
          <ContactForm />
          <Footer />

    </>
  )
}

export default IndividualPage
