import React from 'react'
// import linkedImg from './img/linn.png'
// import GITImg from './img/git.jpg'



// const GithubLink='https://github.com/Shaukat456';
// const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';



const Contact=(props)=>{
    return(

    <>
    <div className="SocialUrls">
    <a  href={props.link}>
        <img src={props.img} alt={props.Address}/>
        </a>
    </div>

        </>    
    )

}


export default Contact;