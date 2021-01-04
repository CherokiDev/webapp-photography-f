const { LOGIN, LOGOUT, ALLUSERS } = require('../types/userType');

const initialState = {
    user: {},
    users: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: action.payload
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