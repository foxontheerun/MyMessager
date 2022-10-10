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
            messages: [ { id: 1, message: 'Hi'},
                { id: 2, message: '=)'},
                { id: 3, message: '=(('},
                { id: 4, message: 'Привет'},
                { id: 5, message: 'Пока'},
            ]
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
        if ( action.type === 'ADD-POST' ) {
            let newPost = {
                id: 5,
                likesCount: 0,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if ( action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;