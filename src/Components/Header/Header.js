import React from 'react';
import h from './Header.module.css'


function Header() {
    return (
        <header className={h.header}>
            {/*<img src='images/INTERPOLATION.png' width="50" height="45"></img>*/}
            <h1>SWAMP</h1>
        </header>
    );
} 

export default Header;