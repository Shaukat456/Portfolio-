import React from 'react'
import { Slide } from 'react-reveal';
import pic from './img/p.jpg'
import './index.css'
import Header from './Header'
import Intro from './Intro';
import ContactPage from './ContactPage';






const Progress = () => {
    return (
        <>
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
                                something helpful. <br/>
                                I've always been an enthusiastic about UX/UI designing and it has always attracted my interest to a greater level so I ended up making myself proficient in ADOBE XD for various mobile and web app designing.
                            </h5>
                    </div>
                               <h5 id='techno'>TECHNOLOGIES </h5>
                            <div className="technologies">
                               <div className="FraLib alltechs">
                                   <h5>FRAMEWORKS</h5>
                              <br/> EXPRESS.js.
                        <br/>  NODE.js 
                        <br/>  REACT.js
                        <br/>  MATERIAL UI
                        <br/>  BOOTSTRAP  
                    <br/>  MongoDB
                               </div>
                               <div className="Tools  alltechs" >
                               <h5>TOOLS</h5>
                            <br/>    VISUAL STUDIO CODE
                            <br/>    NPM
                              <br/>  ADOBE XD
                               </div>
                               <div className="languages  alltechs ">
                               <h5>LANGUAGES</h5>
                            <br/>   JAVASCRIPT(ES5/6) 
                            <br/>   CSS (CSS3)
                           <br/>    HTML5 
                             <br/>  Python3 
                               </div>
                              
                        

                            </div>
                </Slide>
            </div>
            

        </>
    )
}
export default Progress;