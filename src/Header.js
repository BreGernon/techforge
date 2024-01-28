import React from 'react';
import './Header.css';
import logo from './TechForgeLogo.png';


function Header() {
    return (
        <div className = "Header">
            <h2><a href="App.js">Home</a></h2>
            <h2><a href="...">Shop</a></h2>
            <h2><a href="...">Cart</a></h2>
            <h2><a href="...">Account</a></h2>

            <h1>TechForge Systems</h1>
            <img src={logo} height="80px" width="80px"/>

        </div>
    )
}

export default Header