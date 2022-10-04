import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className={style.postBlock}>
          <h3>My posts</h3>
          <div className={style.texting}>
            <div>
                <textarea className={style.textarea}/>
            </div>
            <div>
                <button className={style.btnadd}>Add post</button>
            </div>
          </div>
          <div className={style.post}>
            <Post message='Hi, how are u?'/>
            <Post message='It is my first post!'/>
            <Post/>
            <Post/>
          </div>
        </div>
    );
} 

export default MyPosts;