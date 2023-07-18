import React from 'react'
import './LovedOnesSection3.css'
import LO3 from '../../assets/lo3.jpg'

const LovedOnesSection3 = () => {
  return (
    <>
        <div className='lo3 container'>
            <div className='lo3-content'>

                <div className='lo3-header'>
                    <h1>How Family Wellness Works</h1>
                </div>
                <div className='lo3-banner-img'>
                    <img src={ LO3 } alt="individual therapy" loading="lazy"/>
                </div>

                <div className='lo3-flex'>
                    <div className='lo3-flex-left'>
                        <h1>1</h1>
                    </div>
                    <div className='lo3-flex-right'>
                        <p>Once enrolled in the Aware Recovery Care Program, clients receive a custom treatment plan, and a family ally is identified.</p>
                    </div>
                </div>


                <div className='lo3-flex'>
                    <div className='lo3-flex-left'>
                        <h1>2</h1>
                    </div>
                    <div className='lo3-flex-right'>
                        <p>Aware then assigns a Family Education Facilitator to each client and their ally to provide ongoing support.</p>
                    </div>
                </div>


                <div className='lo3-flex'>
                    <div className='lo3-flex-left'>
                        <h1>3</h1>
                    </div>
                    <div className='lo3-flex-right'>
                        <p>The Family Education Facilitator explains the model, what to expect from treatment, the phases of recovery, and how to support someone struggling with addiction.</p>
                    </div>
                </div>


                <div className='lo3-flex'>
                    <div className='lo3-flex-left'>
                        <h1>4</h1>
                    </div>
                    <div className='lo3-flex-right'>
                        <p>The ally is educated, supported, and resourced as they pursue their own healing and recovery.</p>
                    </div>
                </div>


                <div className='lo3-flex'>
                    <div className='lo3-flex-left'>
                        <h1>5</h1>
                    </div>
                    <div className='lo3-flex-right'>
                        <p>The client and their family may also be referred to Family Systems Therapy, if appropriate.</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default LovedOnesSection3