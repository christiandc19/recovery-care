import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
// import InsuranceSection from '../components/insurance/InsuranceSection';
import ContactForm from '../components/contact/ContactForm';
import InsuranceSection1 from '../components/insurance/InsuranceSection1';
import ContactCards from '../components/contact/ContactCards'
import InsuranceSection2 from '../components/insurance/InsuranceSection2';




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />
           <InsuranceSection1 />
           <InsuranceSection2 />
           {/* <InsuranceSection /> */}
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default InsurancePage
