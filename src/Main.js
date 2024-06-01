import React from 'react';
import foodBrusch from './images/restauranfood.jpg'

function Main() {
    return(
    <main>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</h3>
    <img src={foodBrusch} alt='foodBrusch' width='300 px' />
    </main>
    );
    }

export default Main;