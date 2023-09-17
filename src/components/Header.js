import React from 'react';
import '../styles/Header.css';
import thumbnail4 from '../assets/thumbnail.4.png';

const Header = () => (
  <header className="header">
    <div className="logoContainer">
    <img src={thumbnail4} alt="Logo" className="logo" />
      <h1>NRL United</h1>
    </div>

    <input type="text" placeholder="Search..." />

    <nav className="navLinks">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
    </nav>
  </header>
);

export default Header;