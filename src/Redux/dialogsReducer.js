const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText.trim() !== '') {
                let newMessage = {
                    id: 6,
                    message: state.newMessageText
                };
                state.messages.push(newMessage);
                state.newMessageText = "";
            }
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}




export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;