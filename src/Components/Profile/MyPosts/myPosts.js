import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    const postsData =[
        { id: 1, message: 'Hi, how are u?', likesCount: 53},
        { id: 2, message: 'It is my first post!', likesCount: 67},
    ];

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
              <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
              <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
          </div>
        </div>
    );
} 

export default MyPosts;