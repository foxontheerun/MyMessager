import React from 'react';
import style from './Users.module.css';
import axios from "axios";
const Users = (props) => {

    if ( props.users.length == 0 ) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then();

        props.setUsers([{ id: 1,
            photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg',
            followed: false,
            fullName: 'Shrek',
            status: 'I love Fiona',
            location: {city: 'Swamp', country: 'Farfaraway'}},
            { id: 2,
                photoUrl: 'https://img.kupigolos.ru/hero/5d572251cc95e.jpg?p=bh&s=fe8b05110b912e2e58062cfea6497d07',
                followed: true, fullName: 'Fiona', status: 'I love Shrek',
                location: {city: 'Swamp', country: 'Farfaraway'}},
            { id: 3,
                photoUrl: 'https://img.kupigolos.ru/hero/5cd9d2faa26b0.png?p=bh&s=8ff29196027a855639ba526c6087bdbb',
                followed: false, fullName: 'Donkey', status: 'It\'s my swamp!',
                location: {city: 'Swamp', country: 'Farfaraway'}},])
    }

    return (
        <div className={style.users}>
            { props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.usersPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
};
export default Users;
