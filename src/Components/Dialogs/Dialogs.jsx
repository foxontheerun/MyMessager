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



    const dialogsElements = props.state.dialogs
        .map(dialog => <DialodItem name={dialog.name} id={dialog.id}/>);

    const messagesElements = props.state.messages
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