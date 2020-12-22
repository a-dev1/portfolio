import React from 'react';

import './navbar.styles.scss';

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">ADITYA SHARMA</div>

    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">PROJECTS</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </div>
)

export default NavBar;