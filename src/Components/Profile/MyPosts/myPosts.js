import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={p.post}>
            <Post message='Hi, how are u?'/>
            <Post message='It is my first post!'/>
            <Post/>
            <Post/>
          </div>
        </div>
    );
} 

export default MyPosts;