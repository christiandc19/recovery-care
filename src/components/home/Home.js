import React from 'react'
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import ContactForm from '../contact/ContactForm';
import Section5 from '../section5/Section5'
// import InsuranceSection from '../insurance/InsuranceSection';
// import Whoweare from '../Whoweare/Whoweare'
// import Cards from '../servicesCards/Cards';
// import Conditions from '../conditions/Conditions';
// import Sample from '../../components/sampleComponent/sample'
// import MissionHome from '../mission/MissionHome';

const home = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <ContactForm />
    {/* <Cards />
    <Conditions />
    <Sample />
    <Whoweare />
    <InsuranceSection />
    <MissionHome />
    <ContactForm /> */}
    </>
  )
}

export default home
