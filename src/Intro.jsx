import React from 'react'
import { Slide, LightSpeed, Rotate } from 'react-reveal';
import Header from './Header'
import Progress from './Progress'
import Fade from 'react-reveal/Fade';

import {Switch,Route,NavLink} from 'react-router-dom'


const Intro = () => {
    return (
        <>
       <Header/>
            <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <div className="container">
                        <section className="about-me" id='aboutt'>
                            <div className="intro mx-auto">
                                <h2>Shaukat Sohail</h2>
                                <div className="anim">
                                    <p>Mern Stack Developer</p> <br />

                                    <p>Full Web Stack Developer</p> <br />

                                    <p>React Developer</p><br />
                                </div>
                                <a href="./Resume/Resume.pdf" target="_sh"> <Slide right> <button
                                    className="cv-btn">RESUME 
                                    </button></Slide></a>
                                {/* <NavLink to=""> <button className="work-btn">
                                                    
                                ABOUT Me </button> </NavLink> */}
                            </div>
                        </section>
                    </div>
                    <FadeExample/>   
                        
                                    
                                    

    );
  
                                    
                    


        </>
    )
}
class FadeExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: false };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({ show: !this.state.show });
    }
    render() {
      return (
        <div>
          <Fade bottom when={this.state.show}>
            <h1>React Reveal</h1>
            </Fade>
          <button
            className="btn btn-success my-5 work-btn"
            type="button"
            onClick={this.handleClick}
            >
            { this.state.show ? 'Hide' : 'Show' }
          </button>
        </div>
      );
    }
  }

export default Intro;
export  {FadeExample};