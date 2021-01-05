import React from 'react'


const Intro=()=>{
    return(
        <>
          <div className="container">
            <section className="about-me" id='aboutt'>
                <div className="row ">
                    <div className="col-md-6 mx-auto">
                        <div className="">
                            <div className="">
                            </div>
                        </div>
                        <div className="intro mx-auto">
                            <h2>Shaukat Sohail</h2>
                            <p>Mern Stack Developer</p>
                            <a href="./Resume/Resume.pdf" target="_sh"> <button
                                    className="cv-btn">RESUME</button></a>
                            <a href="#porfolio"> <button className="work-btn">MY WORK</button></a>
                        </div>
                    </div>
                    </div>
                    </section>
                   </div>
        </>
    )
}

export default Intro;
