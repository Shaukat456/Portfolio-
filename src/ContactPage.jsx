import React from 'react'
// import Contact from './Contact'
import './mobile.css'
import Contact from './Contact'
import linkedImg from './img/linn.png'
import GITImg from './img/git.jpg'
import './mobile.css'
import {Switch,Route} from 'react-router-dom'
import Header from './Header'
import { Slide ,Zoom} from 'react-reveal'



const GithubLink='https://github.com/Shaukat456';
const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';



const ContactPage=()=>{
    return(
        <>
        <div className="intro">
        <h2 > Contact </h2>

        </div>
        <Slide left>
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
        </>
    )
}

export default ContactPage;

