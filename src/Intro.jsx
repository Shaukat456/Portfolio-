import React from 'react'
import { Slide, LightSpeed, Rotate } from 'react-reveal';
import Header from './Header'
import Progress from './Progress'
import Fade from 'react-reveal/Fade';
import pic from './img/p.jpg'


import {Switch,Route,NavLink} from 'react-router-dom'


const Intro = () => {
    return (
        <>
       
            <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <div className="container">
                        <section className="about-me" id='aboutt'>
                            <div className="intro">
                                <h2>Shaukat Sohail</h2>
                                <div className="anim">
                                    <p>Mern Stack Developer</p> <br />

                                    <p>Full Web Stack Developer</p> <br />

                                    <p>React Developer</p><br />
                                </div>
                                <a href="#" target="_sh"> <Slide right> <button
                                    className="cv-btn">RESUME 
                                    </button></Slide></a>
                                {/* <NavLink to=""> <button className="work-btn">
                                                    
                                ABOUT Me </button> </NavLink> */}
                            </div>
                        </section>
                    </div>
                    <Progress/>
                    {/* <FadeExample/>    */}
                        
                                    
                                    

    );
  
                                    
                    


        </>
    )
}
// class FadeExample extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { show: false };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       this.setState({ show: !this.state.show });
//     }
//     render() {
//       return (
//         <div>
//           <Fade right when={this.state.show}>
                  
//             </Fade>
//           <button
//             className="btn btn-success my-5 work-btn"
//             type="button"
//             onClick={this.handleClick}
//             >
//             { this.state.show ? 'Hide' : 'Show' }
//           </button>
//         </div>
//       );
//     }
//   }

export default Intro;
// export  {FadeExample};