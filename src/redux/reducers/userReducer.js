const {
    LOGIN,
    LOGOUT,
    ALLUSERS
} = require('../types/userType');

const initialState = {
 
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