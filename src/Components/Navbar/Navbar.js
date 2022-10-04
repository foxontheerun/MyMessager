import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={n.nav}>
        <div>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/messages'>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
    );
} 

export default Navbar;