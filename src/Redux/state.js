const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are u?', likesCount: 53},
                { id: 2, message: 'It is my first post!', likesCount: 67},
            ],
            newPostText: 'Hello'

        },
        dialogsPage: {
            dialogs: [ { id: 1, name: 'Nailya'},
                { id: 2, name: 'Alsu'},
                { id: 3, name: 'Polina'},
                { id: 4, name: 'Masha'},
                { id: 5, name: 'Aigul'},
            ],
            messages: [ { id: 1, message: 'привет'},
                { id: 2, message: '=)'},
                { id: 3, message: '=(('},
                { id: 4, message: 'как дела?'},
                { id: 5, message: 'как самочувствие?'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber()  {
        console.log('popoooopopo')
    },
    get state() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    likesCount: 0,
                    message: this._state.profilePage.newPostText
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_MESSAGE:
                if (this._state.dialogsPage.newMessageText !== '') {
                    let newMessage = {
                        id: 6,
                        message: this._state.dialogsPage.newMessageText
                    };
                    this._state.dialogsPage.messages.push(newMessage);
                    this._state.dialogsPage.newMessageText = "";
                    this._callSubscriber(this._state);
                }
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}




export default store;