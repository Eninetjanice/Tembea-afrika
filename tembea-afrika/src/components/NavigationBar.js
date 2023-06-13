// components/NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
