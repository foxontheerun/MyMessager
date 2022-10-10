import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
function MyPosts(props) {
    const posts =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.postBlock}>
          <h3>My posts</h3>
          <div className={style.texting}>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                          className={style.textarea}/>
            </div>
            <div>
                <button onClick={ addPost }
                        className={style.btnadd}>Add post</button>
            </div>
          </div>
          <div className={style.post}>
              { posts }
          </div>
        </div>
    );
} 

export default MyPosts;