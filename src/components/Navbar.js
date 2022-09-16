import React from 'react';
import './Navbar.css';
import Logo from '../assets/sailboat_icon.png';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <a href="/" className="site-title">Sushi Boat</a>
        <ul>
          <li><a href="/menu" className="menu-list">Menu</a></li>
          <li><a href="/about" className="menu-list">About</a></li>
          <li><a href="/location" className="menu-list">Hours & Location</a></li>
          <li><a href="/contact" className="menu-list">Contact Us</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;