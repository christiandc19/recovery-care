import React from 'react'
import './Individual3.css'
import One from '../../assets/one.png'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import Four from '../../assets/four.png'

const Individual3 = () => {
  return (
    <>
      <div className='individual3 container'>
        <div className='individual3-content'>

{/* FLEX ITEMS */}

            <div className='individual3-flex'>
              
                <div className='individual3-icon'>
                    <img src={ One } alt="individual therapy" loading="lazy"/>
                </div>

                <div className='individual3-caption'>
                    <div>
                        <h1>Program introduction & education.</h1>
                        <p>Once you’ve committed to the program and discussed financial obligations, it’ll be time to meet your team! We’ll arrive at your home at an agreed-upon time so you can begin to establish a personal connection with your Care Coordinator and two Client Recovery Advisors. During your first visit, we’ll give you an indepth overview of our program and help you identify family or friends you want to include in your recovery journey. While we work on transforming your home into a treatment center, we’ll also schedule the next few weeks of visits.</p>
                        <i><h2>"This is the way I always wanted to live."</h2></i>

                    </div>
                </div>


                <div className='individual3-flex'>
                    <div className='individual3-icon'>
                        <img src={ Two } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual3-caption'>
                        <div>
                            <h1>Strategic action.</h1>
                            <p>Your Care Coordinator will develop and maintain your treatment plan, including scheduling your psychiatric evaluation and identifying any necessary outside providers if you do not already have outside providers in place (Primary Care Provider, Individual Therapist, or Medical Specialists).  During the Aware program you’ll meet virtually with a Psychotherapist who will help you with issues like managing stress, improving self-esteem and self-compassion, communication skills, and addressing negative thought patterns. Your Psychotherapist will work with you and your Care Team to identify and support your unique needs and goals. </p>
                            <i><h2>"So many resources and support all around me."</h2></i>

                        </div>
                    </div>
                </div>


                <div className='individual3-flex'>
                    <div className='individual3-icon'>
                        <img src={ Three } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual3-caption'>
                        <div>
                            <h1>Family systems awareness and support.</h1>
                            <p>Addiction is a family disease. We provide support for your family through a Family Education Facilitator who offers general education about the recovery process, encourages self-care, and connects you and your family to family recovery resources.</p>
                            <i><h2>"I have confidence that my family can heal as well."</h2></i>

                        </div>
                    </div>
                </div>


                <div className='individual3-flex'>
                    <div className='individual3-icon'>
                        <img src={ Four  } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='individual3-caption'>
                        <div>
                            <h1>Enhancement of life skills.</h1>
                            <p>Addiction impacts every aspect of life, and recovery can, too. Crucial to long-term recovery is the ability to successfully navigate relationships at home, work, and school. Your Client Recovery Advisors will help you with goal setting and community assimilation, connecting you to community recovery resources to achieve your goals in many areas of wellness including: Educational, Occupational, Physical, Spiritual, Legal , and Social. </p>
                        </div>
                    </div>
                </div>


            </div>



            
        </div>
      </div>
    </>
  )
}

export default Individual3
