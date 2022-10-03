import React from 'react';
import p from './Post.module.css';

function Post(props) {
    return (
      <div className={p.item}>
        <img src='https://i0.wp.com/rubezahl.ru/pics/b98fca9803c2_1040E/image.png'></img>
        {props.message}
        <div>
          <span>Like</span>
        </div>
      </div>
    );
} 

export default Post;