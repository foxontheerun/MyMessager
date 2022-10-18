import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";

function Profile(props) {

    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer  />
      </div>
    );
} 

export default Profile;