import React from 'react';
import h from './Header.module.css'


function Header() {
    return (
        <header className={h.header}>
            <img src='images/swamp.png'></img>
            <h1>SWAMP</h1>
        </header>
    );
} 

export default Header;