import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";
function DialogItem(props) {
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

function Input(props) {
    const newMessageElement = React.createRef();
    const addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch( updateNewMessageTextActionCreator(text) );
    }
     return (
         <div className={style.inputText}>

             <div>
                        <textarea ref={newMessageElement}
                                  onChange={ onMessageChange }
                                  value={props.dialogsPage.newMessageText}
                                  className={style.textarea}
                        />
             </div>
             <div>
                 <button
                     onClick={ addMessage }
                     className={style.btnadd}
                 >Send</button>
             </div>
         </div>
     );
}

function Dialogs(props) {
    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message}/>);
        return (
                <div className={style.dialogs}>
                    <div className={style.messages}>
                        { messagesElements }
                        <Input dialogsPage={props.dialogsPage}
                               dispatch={props.dispatch}
                        />
                    </div>
                    <div className={style.dialogItem}>
                        { dialogsElements }
                    </div>
                </div>
    );
}

export default Dialogs