import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
        return {
                dialogsPage: state.dialogsPage
        }
};
let mapDispatchToProps = (dispatch) => {
        return {
                updateNewMessageText: (text) => {
                        dispatch(updateNewMessageTextCreator(text));
                        },
                addMessage: () => {
                        dispatch( addMessageCreator() );
                }
        }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;