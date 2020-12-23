import React from 'react';

import './navbar.styles.scss';

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">ADITYA SHARMA</div>

    <ul>
      <li><a href="#Home">home</a></li>
      <li><a href="#About">about</a></li>
      <li><a href="#Projects">project</a></li>
      <li><a href="#Contact">contact</a></li>
    </ul>
  </div>
)

export default NavBar;