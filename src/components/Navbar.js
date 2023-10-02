// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">GitHub</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
