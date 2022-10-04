import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialodItem(props) {
    const path = '/messages/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

function Dialogs(props) {

    const dialogDAta =[ { id: 1, name: 'Alsu'},
                        { id: 2, name: 'Nailya'},
                        { id: 3, name: 'Polina'},
                        { id: 4, name: 'Masha'},
                        { id: 5, name: 'Nick'},]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                <DialodItem name='Alsu' id='1'/>
                <DialodItem name='Nailya' id='2'/>
                <DialodItem name='Polina' id='3'/>
                <DialodItem name='Masha' id='4'/>
           </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='=)'/>
                <Message message='=))'/>
            </div>
        </div>
    );
}

export default Dialogs