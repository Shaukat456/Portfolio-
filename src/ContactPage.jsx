import React from 'react'
// import Contact from './Contact'
import './mobile.css'
import Contact from './Contact'
import linkedImg from './img/linn.png'
import GITImg from './img/git.jpg'
import './mobile.css'
import {Switch,Route} from 'react-router-dom'
import Header from './Header'



const GithubLink='https://github.com/Shaukat456';
const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';



const ContactPage=()=>{
    return(
        <>
        <Header/>
<Contact
img={linkedImg}
address={LinkedIn}
/>
<Contact
  img={GITImg}
address={GithubLink}
/>
        </>
    )
}

export default ContactPage;

