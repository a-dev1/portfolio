import React from 'react';
import './App.scss';

import CustomButton from './component/custom-button/custom-button.component'
import {ReactComponent as IntroImage } from './assets/intro-image.svg'
import NavBar from './component/navbar/navbar.component'


const Home = () => (
  <div>
      <NavBar className='nav-bar'/>
    
      <div className="Home">

        <div className="intro-container">
          <p className="intro">
            <span className="hello-line">Hello!!! I'm</span> <br />
            <span className="name">Aditya Sharma,</span><br /> 
            A critical thinker, curious, creative, Web Developer
          </p>
          <div className="button-container">
            <CustomButton value="SAY HELLO" type="submit" size="big"/>
            <CustomButton value="Explore more->" size="big" style="simple"/>
          </div>
        </div>

        <div className="intro-image-container">
          <IntroImage className="intro-image"/>
        </div>

      </div>
    </div>
)

const About = () => (
  <div className="About">

  </div>
)

function App() {
  return (
    <div>
      <Home /> 
      <div className="About">
        <h1>About me</h1>
        <p>
          I am a 3rd year computer engineering student, who wanted to become a full- stack developer and wanted to master all the skills I am learning.
          I wanted to experience the real world scenario of working with teams and organizations.
        </p>
        
      </div>
    </div>
  );
}
export default App;
