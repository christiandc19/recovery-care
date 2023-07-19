import React from 'react'
import './InsuranceSection1.css'
import Step1 from '../../assets/step1.png'
import Step2 from '../../assets/step2.png'
import Step3 from '../../assets/step3.png'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Horizon from '../../assets/horizon.png'
import UMR from '../../assets/umr.png'
import United from '../../assets/united-healthcare.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'

import InsuranceProps from './InsuranceProps'


const InsuranceSection1 = () => {
  return (
    <>
        <div className='insuranceSection1 container'>
                <div className='insuranceSection1-content'>
                        <div className='insuranceSection1-header'>
                            <h1>Recovery is possible—and affordable</h1>
                            <h2>Discover insurance coverage and finance options.</h2>
                            <p>We want everyone to be able to live a life free of addiction. That’s why Aware offers coverage through many insurance companies. We also offer private-pay and financing options so that you can invest in you.</p>
                        </div>

                            <div className='insuranceSection1-flex'>
                                <div className='insuranceSection1-left'>
                                    <div className='insuranceSection1-left-icon'>
                                        <img src={ Step1 } alt="individual therapy" loading="lazy"/>
                                    </div>

                                </div>
                                <div className='insuranceSection1-right'>
                                    <h1>Insurance</h1>
                                    <p>To see if your insurance plan covers our program, please complete a verification form and a member of our team will contact you as soon as possible. Aware is an in-network provider with a number of health insurance companies, including:</p>
                                    
                                    <div className='insuranceSection1-logos'>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Cigna}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Aetna}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Beacon}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Bluecross}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Horizon}/>
                                        </div>

                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={UMR}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={United}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Optima}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Optum}/>
                                        </div>
                                        <div className='insuranceSection1-flexItem'>
                                            <InsuranceProps Image={Anthem}/>
                                        </div>


                                    </div>
                                    

                                </div>
                            </div>








                            <div className='insuranceSection1-flex'>
                                <div className='insuranceSection1-left'>
                                    <div className='insuranceSection1-left-icon'>
                                        <img src={ Step2 } alt="individual therapy" loading="lazy"/>
                                    </div>

                                </div>
                                <div className='insuranceSection1-right'>
                                    <h1>Private pay</h1>
                                    <p>Those interested in privately paying for care can pay in full or in flexible monthly installments. Talk with a care specialist to learn more.</p>
                                </div>
                            </div>


                            <div className='insuranceSection1-flex'>
                                <div className='insuranceSection1-left'>
                                    <div className='insuranceSection1-left-icon'>
                                        <img src={ Step3 } alt="individual therapy" loading="lazy"/>
                                    </div>

                                </div>
                                <div className='insuranceSection1-right'>
                                    <h1>Financial assistance</h1>
                                    <p>Aware partners with a variety of third-party programs to offer low- or no-interest financing for those who qualify. Connect with a care specialist to learn more about M-lend or Lightstream.</p>
                                </div>
                            </div>






                </div>



        </div>  
    </>
    
  )
}

export default InsuranceSection1