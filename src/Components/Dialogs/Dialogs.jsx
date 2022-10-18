import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
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

    const onSendMessageClick = () => {
        props.addMessage();
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
     return (
         <div className={style.inputText}>
             <div>
                        <textarea ref={newMessageElement}
                                  onChange={ onMessageChange }
                                  value={props.dialogsPage.newMessageText}
                                  className={style.textarea}/>
             </div>
             <div>
                 <button
                     onClick={ onSendMessageClick }
                     className={style.btnadd}
                 ><ion-icon name="send-outline"></ion-icon></button>
             </div>
         </div>
     );
}

function Dialogs(props) {
    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} className={style.message}/>);
        return (
                <div className={style.dialogs}>
                    <div className={style.messages}>
                        { messagesElements }
                        <Input updateNewMessageText={props.updateNewMessageText}
                               dialogsPage={props.
                                   dialogsPage}
                               addMessage={props.addMessage}
                        />
                    </div>
                    <div className={style.dialogItem}>
                        { dialogsElements }
                    </div>
                </div>
    );
}

export default Dialogs