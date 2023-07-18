import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import Individual from '../components/individual/Individual'
import Individual1 from '../components/individual/Individual1'
import Individual2 from '../components/individual/Individual2'
import Section3 from '../components/section3/Section3'
import Individual3 from '../components/individual/Individual3'
import ContactCards from '../components/contact/ContactCards'

const IndividualPage = () => {
  return (
    <>
          <Navbar /> 
          <Individual />
          <Individual1 />
          <Individual2 />
          <Section3 />
          <Individual3 />
          <ContactForm />
          <ContactCards />
          <Footer />

    </>
  )
}

export default IndividualPage
