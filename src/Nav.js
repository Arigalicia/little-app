import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './images/Logo.svg';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
return(
<nav className={`navbar ${menuOpen ? "open" : ""}`}>
<a href="/" className="logo">
        <img src={Logo} alt="LL logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
<ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/orderOnline">Order online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
</nav>

);
}

export default Nav;