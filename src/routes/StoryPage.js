import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Story from '../components/story/Story'
import StorySection1 from '../components/story/StorySection1'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'


const MissionPage = () => {
    return (
        <>
           <Navbar /> 
           <Story />
           <StorySection1 />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default MissionPage
