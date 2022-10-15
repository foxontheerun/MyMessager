const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are u?', likesCount: 53},
        { id: 2, message: 'It is my first post!', likesCount: 67},
    ],
    newPostText: 'Hello'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;