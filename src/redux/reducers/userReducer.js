const {
    LOGIN,
    LOGOUT,
    ALLUSERS
} = require('../types/userType');

const initialState = {
    uid: {},
    name: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case LOGOUT:
            return {
                ...state,
                initialState
            };
        case ALLUSERS:
            return {
                ...state,
                users: action.payload
            }
            default:
                return state;
    }
}

export default userReducer;