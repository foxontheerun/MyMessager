import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
import MyPosts from "./myPosts";


function MyPostsContainer(props) {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostCreator());
    };
    const onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    return ( < MyPosts updateNewPostText={onPostChange}
                       addPost={addPost}
                       posts={state.profilePage.posts}
                       newPostText={state.profilePage.newPostText}/>);

} 

export default MyPostsContainer;