import React from 'react'
import './StorySection1.css'

import Story1 from '../../assets/story1.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/splatter3.png'


const StorySection1 = () => {
    return (
        <>
                    <div className='storySection1 container'>
        <div className='storySection1-flex'>
                    <div className='storySection1-left'>
                        <h1>Who We Are?</h1>
                        <p>Aware Recovery Care was founded in 2011 in collaboration with doctors from Yale. <br/><br/>

                        They wanted to create a program that would provide personalized and comprehensive care to individuals in the comfort of their own homes, recognizing that the traditional model of treatment wasn’t always effective for everyone.<br/><br/>

                        The vision for Aware Recovery Care’s In-Home Addiction Treatment (IHAT) program was to provide medically integrated behavioral healthcare that addressed the root causes of addiction, not just the symptoms of it, and to provide ongoing support to clients as they navigated the challenges of recovery. They believed that by providing treatment in the home environment, they could reduce the stigma associated with addiction and make it easier for individuals to access care.</p>
                    </div>


                    <div className='storySection1-right'>
                        <div className='storySection1-images'>
                            <img src={ Story1 } alt="individual therapy" loading="lazy"/>

                            <div className='storySection1-accent'>
                                <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='storySection1-accent2'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>    

        </>
    )
}

export default StorySection1
