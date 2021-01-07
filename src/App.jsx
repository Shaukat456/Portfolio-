import React from 'react'
import './index.css'
import Header from './Header'
import Intro from './Intro'
import Progress from './Progress'

// ICONS 
import './mobile.css'
import Contact from './Contact'
import linkedImg from './img/linn.png'
import GITImg from './img/git.jpg'
import './mobile.css'
import {Switch,Route} from 'react-router-dom'
import ContactPage from './ContactPage'


const GithubLink='https://github.com/Shaukat456';
const LinkedIn='https://www.linkedin.com/in/shaukat-sohail-012aaa167/';

// const Mail=''

const App = () => {
    return (
      <>
      <Header/>
      <Switch>
      <Route exact path='/' component={Intro}/>
    <Route exact path='/Contact'    component={ContactPage}/>
    <Route exact path='/Skills'    component={Progress}/>


      </Switch>


      {/* <Route exact path='/Intro'  component={Progress}/> */}
      {/* <Route exact path='/Contact' render={Contact}/> */}
     {/* <Intro/> */}
     {/* <Progress/> */}
      

        </>
    )
}

export default App;