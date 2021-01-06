import React from 'react'
import { Slide, LightSpeed,Rotate} from 'react-reveal';
import { Fade } from 'react-bootstrap';


const Intro=()=>{
    return(
        <>
        <Slide>
          <div className="container">
            <section className="about-me" id='aboutt'>           
                 <div className="intro mx-auto">
                        <Slide>   <h2>Shaukat Sohail</h2>
                            <p>Mern Stack Developer</p></Slide>  
                             <a href="./Resume/Resume.pdf" target="_sh"> <button
                                    className="cv-btn">RESUME</button></a>
                                   <a href="#porfolio"> <button className="work-btn">MY WORK</button></a> 
                            
                        </div>
                  
                    </section>
                   </div>
                   </Slide>
        


        </>
    )
}

export default Intro;
