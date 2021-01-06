import React from 'react'
import { Slide, LightSpeed,Rotate} from 'react-reveal';



const Intro=()=>{
    return(
        <>
        
          <div className="container">
            <section className="about-me" id='aboutt'>           
                 <div className="intro mx-auto">
                       <h2>Shaukat Sohail</h2> 
                        <div className="anim">
                            <p>Mern Stack Developer</p> <br/>
                           
                           
                            <p>Full Web Stack Developer</p> <br/>
                           
                            
                            <p>React Developer</p><br/>
                        </div>
                                       <a href="./Resume/Resume.pdf" target="_sh"> <Slide right> <button
                                    className="cv-btn">RESUME </button></Slide></a>
                                   <a href="#porfolio"> <button className="work-btn">MY WORK </button> </a> 
                            
                        </div>
                  
                    </section>
                   </div>
        


        </>
    )
}

export default Intro;
