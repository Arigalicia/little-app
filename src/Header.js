import React from 'react';
import HeadImg from './images/restauranfood.jpg';
import { Link } from 'react-router-dom';
import Menu from './Menu'

function Header() {
return(
  <><header className="header">
    <section>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on
        traditional recipes served with a modern twist</p>
      <Link to="/reservations">
        <button aria-label="On Click">Reserve a Table</button>
      </Link>
      <div className="header-img">
        <img src={HeadImg} alt="Food plate" />
      </div>
    </section>
  </header>
  <section>
      <Menu />
  </section></>
);
}

export default Header;