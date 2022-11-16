const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const initialState = {
    dialogs: [ { id: 1, name: 'Shrek'},
        { id: 2, name: 'Fiona'},
        { id: 3, name: 'Donkey'},
        { id: 4, name: 'Puss'},
    ],
    messages: [ { id: 1, message: 'привет', time: ''},
        { id: 2, message: '=)', time: ''},
        { id: 3, message: '=((', time: ''},
        { id: 4, message: 'как дела?', time: ''},
        { id: 5, message: 'как самочувствие?', time: ''},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText.trim() !== '') {
                let newMessage = {
                    id: 6,
                    message: state.newMessageText
                };
                stateCopy.messages = [...state.messages];
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = "";
            }
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return stateCopy;
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