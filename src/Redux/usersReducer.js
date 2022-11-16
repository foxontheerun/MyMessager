const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        { id: 1, followed: false, fullname: 'Shrek', status: 'I love Fiona',  location: {city: 'Swamp', country: 'Farfaraway'}},
        { id: 2, followed: true, fullname: 'Fiona', status: 'I love Shrek',  location: {city: 'Swamp', country: 'Farfaraway'}},
        { id: 3, followed: false, fullname: 'Donkey', status: 'It\'s my swamp!',  location: {city: 'Swamp', country: 'Farfaraway'}},
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;