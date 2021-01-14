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
        <h1> Contact </h1>
        </div>

        <div className="SocialUrls">       
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
   <Slide right>
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
   <Slide right>
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
        </div>

        <div className='Cofo'>
          <h5>Discuss a Project/Say Hi</h5>
      <form action="/visitors" method='POST'>
        <input type="text" maxLength="14" required/>
        <input type="email" maxLength="30" title="Email??"  required />
        <input type="text" maxLength="40"/>
        <button type="submit"> SEND</button>
      </form>
        </div>
        </>

    )
}

export default ContactPage;

