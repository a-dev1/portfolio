import React from 'react';
import './App.css';

import NavBar from './component/navbar/navbar.component'

function App() {
  return (
    <div>
      <NavBar className='nav-bar'/>
    
      <div className="Home">
        <div className="intro">
          <h1>Hey!!! there</h1>
          <p>
            I am <span>Aditya Sharma</span>, 
            A Web Developer
          </p>
        </div>
        <div className="intro-image">
          
        </div>
      </div>
    </div>
  );
}

export default App;
