import React from 'react';
import longLogo from './images/LL-longLogo.PNG';

function Footer() {
    return(
    <footer className="">
        <section><div className="company-info">
            <img src={longLogo} alt="Logo for the copyright" />
            <p>Copyright Little Lemon</p>
        </div><div>
                <h3>Navigation Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div><div>
                <h3>Contact us!</h3>
                <ul>
                    <li>Address: <br /> 123 Town Street, Chicago</li>
                    <li>Phone: <br /> +12 553 456 789</li>
                    <li>Email: <br /> littlelemon@lemon.com</li>
                </ul>
            </div><div>
                <h3>You can find us on social media</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
            </div>
            </section>
            </footer>
    );
};
export default Footer;