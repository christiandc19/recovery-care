import React from 'react'
import './Individual1.css'
import Step1 from '../../assets/step1.png'
import Step2 from '../../assets/step2.png'
import Step3 from '../../assets/step3.png'
import Step4 from '../../assets/step4.png'

const Individual1 = () => {
  return (
    <>
      <div className='individual1 container'>
        <div className='individual1-content'>
            <div className='individual1-header'>
                <h1>What does this mean for our clients?</h1>
            </div>


{/* FLEX ITEMS */}

            <div className='individual1-flex'>
                <div className='individual1-icon'>
                    <img src={ Step1 } alt="individual therapy" loading="lazy"/>
                </div>

                <div className='individual-caption'>
                    <div>
                        <h1>You do not have to leave home</h1>
                        <p>We tailor our In-Home Addiction Treatment (IHAT) plan to your needs, and we offer a unique hybrid of both virtual and in-home care team visits.</p>
                    </div>
                </div>


                <div className='individual1-flex'>
                    <div className='individual1-icon'>
                        <img src={ Step2 } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual-caption'>
                        <div>
                            <h1>All treatment comes to you</h1>
                            <p>We utilize vetted technologies and evidence-based treatments to ensure a path to health for each of our clients.</p>
                        </div>
                    </div>
                </div>


                <div className='individual1-flex'>
                    <div className='individual1-icon'>
                        <img src={ Step3 } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual-caption'>
                        <div>
                            <h1>Your risks are minimized</h1>
                            <p>The IHAT model allows for protection from the risks of disease transmission common to more traditional group settings.</p>
                        </div>
                    </div>
                </div>


                <div className='individual1-flex'>
                    <div className='individual1-icon'>
                        <img src={ Step4 } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual-caption'>
                        <div>
                            <h1>Your treatment, your way</h1>
                            <p>We offer a full continuum of home-based treatments including: psych evaluation, medication bridges, medication-assisted treatment (MAT), individual and family therapy, medical and behavioral healthcare coordination by a licensed nurse or social worker, and more.</p>
                        </div>
                    </div>
                </div>


            </div>



            
        </div>
      </div>
    </>
  )
}

export default Individual1
