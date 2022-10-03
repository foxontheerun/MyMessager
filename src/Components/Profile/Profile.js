import React from 'react';
import MyPosts from './MyPosts/myPosts';
import p from './Profile.module.css';

function Profile() {
    return (
        <div className={p.content}>
          <MyPosts/>
      </div>
    );
} 

export default Profile;