import React, { useState } from 'react'
// import Contact from './Contact'
import './mobile.css'
import Contact from './Contact'
import linkedImg from './img/linn.png'
import GITImg from './img/git.jpg'
import './mobile.css'
import {Switch,Route} from 'react-router-dom'
import Header from './Header'
import { Slide ,Zoom} from 'react-reveal'
import Footer from './Footer'
import Axios from 'axios'


const GithubLink='https://github.com/Shaukat456';
const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';




const ContactPage=()=>{
  
  return(
        <>
      

      


        {/* <div className="intro"> */}
        {/* <h1 > FIND ME HERE </h1> */}
        {/* </div> */}
        {/* <div className="SocialUrls">        */}
{/* <Slide left>
<Contact
img={linkedImg}
address={LinkedIn}
/>
</Slide>

<Zoom bottom>
<Contact
  img={GITImg}
  address={GithubLink}
/>
</Zoom>
   */}

        {/* </div> */}
        
{/* 

         <div className='Cofo'>
          <h5>Discuss a Project/Say Hi</h5>
      <form action="/visitors" method='POST'> 
      
      
      <Zoom>  <input type="text" maxLength="14" placeholder='Name' name='name'  required/></Zoom>
       <Slide left> <input type="email" maxLength="30" name='email'  placeholder='Email' title="Email??"  required /></Slide>
       <Slide left>  <input type="text" maxLength="40" name='pdis'  placeholder='Anything' /></Slide>
       <button type="submit"><Slide right> SEND  </Slide>  </button>
      
      
      </form>
        </div>
        <Footer/> */}
        
        </>
    )
}

export default ContactPage;

