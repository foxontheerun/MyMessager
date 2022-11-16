import React from "react";
import {connect} from "react-redux";
import Users from "./Usres";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersReducer";




let mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch( unfollowAC(userId) );
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;