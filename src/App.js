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

function App() {
  return (
    <div>
      <Home /> 
      <div className="About">
        <h1></h1>
      </div>
    </div>
  );
}
export default App;
