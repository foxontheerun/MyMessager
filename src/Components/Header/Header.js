import React from 'react';
import h from './Header.module.css';


function Header() {
    return (
        <header className={h.header}>
            <img src='images/logoCupidon.png' width="30" height="30"></img>
        </header>
    );
} 

export default Header;