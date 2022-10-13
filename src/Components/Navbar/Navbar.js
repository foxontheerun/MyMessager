import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useState} from 'react';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <nav  className={isActive ? `${s.active} ${s.navigation}` : s.navigation}>
            <ul>
                <li>
                    <NavLink to='/profile'>
                        <span className={s.icon}><ion-icon name="person-outline"></ion-icon></span>
                        <span className={s.title}>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/messages'>
                        <span className={s.icon}><ion-icon name="chatbubbles-outline"></ion-icon></span>
                        <span className={s.title}>Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        <span className={s.icon}><ion-icon name="newspaper-outline"></ion-icon></span>
                        <span className={s.title}>News</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/music'>
                        <span className={s.icon}><ion-icon name="play-outline"></ion-icon></span>
                        <span className={s.title}>Music</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings'>
                        <span className={s.icon}><ion-icon name="settings-outline"></ion-icon></span>
                        <span className={s.title}>Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logout'>
                        <span className={s.icon}><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className={s.title}>Logout</span>
                    </NavLink>
                </li>
            </ul>
            <div className={s.toggle} onClick={handleClick}></div>
            {/*<div>*/}
            {/*  <NavLink to='/profile'>Profile</NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <NavLink to='/messages'>Messages</NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <NavLink to='/news'>News</NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <a>Music</a>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <a>Settings</a>*/}
            {/*</div>*/}
      </nav>
    );
} 

export default Navbar;