import React from 'react';

import './navbar.styles.scss';

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">ADITYA &nbsp;SHARMA</div>

    <ul>
      <li><a href="#Home">HOME</a></li>
      <li><a href="#About">ABOUT</a></li>
      <li><a href="#Projects">PROJECTS</a></li>
      <li><a href="#Contact">CONTACT</a></li>
    </ul>
  </div>
)

export default NavBar;