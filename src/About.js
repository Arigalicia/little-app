import React from "react";
import Owners from './images/Mario and Adrian A.jpg';
import Chef from './images/restaurant chef B.jpg';
function About(){
return (
    <><section className="header">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist</p>
    </section>
    <img src={Owners} width="950px"/>
    <img src={Chef} width="950px"/></>
);
};

export default About;