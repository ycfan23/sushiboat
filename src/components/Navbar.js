import React from 'react';
import './Navbar.css'
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="site-title">Sushi Boat</a>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/location">Hours & Location</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;