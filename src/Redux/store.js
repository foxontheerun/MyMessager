import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;