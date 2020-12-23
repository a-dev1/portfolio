import React from 'react';
import './App.scss';

import {ReactComponent as IntroImage } from './assets/intro-image.svg'
import NavBar from './component/navbar/navbar.component'

function App() {
  return (
    <div>
      <NavBar className='nav-bar'/>
    
      <div className="Home">

        <div className="intro-container">
          <p className="intro">
            <span className="hello-line">Hello!!! I'm</span> <br />
            <span className="name">Aditya Sharma,</span><br /> 
            A Web Developer
          </p>
          <div className="button-container">
            <button className="say-hello-btn">SAY HELLO</button>
            <button className="about-me-btn">ABOUT ME</button>   
          </div>
        </div>

        <div className="intro-image-container">
          <IntroImage className="intro-image"/>
        </div>

      </div>
    </div>
  );
}

export default App;
