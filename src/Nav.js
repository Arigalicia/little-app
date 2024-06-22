import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.svg';
// must put LINKS

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
        <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reserve a Table</Link></li>
        <li><Link to="/orderOnline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
</nav>
);
}

export default Nav;