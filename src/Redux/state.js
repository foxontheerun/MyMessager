

let rerenderEntireTree = () => {
    console.log('popoooopopo')
}

const state = {
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
}

export  const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export  const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {

}
export default state;