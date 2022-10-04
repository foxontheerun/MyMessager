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

    const dialogs =[ { id: 1, name: 'Nailya'},
                        { id: 2, name: 'Alsu'},
                        { id: 3, name: 'Polina'},
                        { id: 4, name: 'Masha'},
                        { id: 5, name: 'Aigul'},
    ];

    const messages =[ { id: 1, message: 'Hi'},
                        { id: 2, message: '=)'},
                        { id: 3, message: '=(('},
                        { id: 4, message: 'Привет'},
                        { id: 5, message: 'Пока'},
    ];

    const dialogsElements = dialogs
        .map(dialog => <DialodItem name={dialog.name} id={dialog.id}/>);

    const messagesElements = messages
        .map(message => <Message message={message.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                { dialogsElements }
           </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs