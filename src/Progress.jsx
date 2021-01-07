import React from 'react'
import { Slide } from 'react-reveal';
import pic from './img/p.jpg'
import './index.css'
import Header from './Header'
import Intro from './Intro';






const Progress = () => {
    return (
        <>
         <Header/>
            <div className="progress">
                <Slide left>
                    <div className="picture_section">
                        <img className='picture' src={pic} alt="MyImg" />
                    </div>
                </Slide>
                <Slide right>
                    <div className="myself" id='myself'>
                        <h5 >I am an 18 year old boy from KARACHI ,PK . Trying to persue programming as a profession
                                with a keen interest in <b> Web developement</b>. I am currently in Intermediate
                                (Science). I like to solve real world problems by transforming my <b>code</b> into
                                something helpful.
                             
                              <br/>
                              • JAVASCRIPT  <br/>
                              • CSS 
                              <br/>
                              • HTML 
                              <br/>• EXPRESS.js.
                              <br/> • NODE.js 
                              <br/>• REACT.js
                              <br/> • MATERIAL UI
                              <br/> • BOOTSTRAP  
                              <br/>• MongoDB
                        </h5>
                    </div>
                </Slide>
            </div>
           
            

        </>
    )
}
export default Progress;