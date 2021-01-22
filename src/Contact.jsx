import React from 'react'
import { Fade } from 'react-bootstrap';
import { Slide } from 'react-reveal';
// import linkedImg from './img/linn.png'
// import GITImg from './img/git.jpg'
import headings from './headings'
import Component from './Component';


// const GithubLink='https://github.com/Shaukat456';
// const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';



const Contact=(props)=>{
    function ncard(val){
        return(
            <>
            <Component
            heading1={val.heading1}
            heading2={val.heading2}
            heading3={val.heading3}
        />
            </>
        )
    }
  
    return(

    <>
    <a  href={props.address} target='_Link'>
        <img src={props.img} alt={props.Address}/>
        </a>
        
      {headings.map(ncard)}  
    {/* <Component
        heading1={headings[0].heading1}
        heading2={headings[0].heading2}
        heading3={headings[0].heading3}
    /> */}

        </>    
    )

}


export default Contact;