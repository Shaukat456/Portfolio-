import React from 'react'
import  'react-router-dom'
import {Switch,Route,NavLink} from 'react-router-dom'



const Header=()=>{
    return(
        <>
    <div className="navbar">
        <ul>
            <NavLink className='li'  to='/' >Me  </NavLink>
           <NavLink  className='li' to='/Works'  > WORKS </NavLink>
           <NavLink  className='li' to='/Skill' > SKILLS </NavLink>
           <NavLink  className='li' to='/Contact' >CONTACT  </NavLink> 
        </ul>
    </div>
    </>
    )
}


export default Header;