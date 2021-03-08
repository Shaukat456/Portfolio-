import React from 'react'
import  'react-router-dom'
import {Switch,Route,NavLink} from 'react-router-dom'



const Header=()=>{

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}
    return(
        <>
    <div className="navbar"  id='navbar'>
        <ul>
            <NavLink className='li'  to='/' >Me  </NavLink>
           <NavLink  className='li' to='/Skills' > SKILLS </NavLink>
           <NavLink  className='li' to='/Contact' >CONTACT  </NavLink> 
           
        </ul>
    </div>
    <script>

    </script>
    </>
    )
}


export default Header;