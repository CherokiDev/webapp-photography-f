import {
    UI_FINISH_LOADING,
    UI_REMOVE_ERROR,
    UI_SET_ERROR,
    UI_START_LOADING
} from "../types/uiType";

const initialState = {
    loading: false,
    msgError: null
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_SET_ERROR:
            return {
                ...state,
                msgError: action.payload
            };
        case UI_REMOVE_ERROR:
            return {
                ...state,
                msgError: null
            };
        case UI_START_LOADING:
            return {
                ...state,
                loading: true
            };
        case UI_FINISH_LOADING:
            return {
                ...state,
                loading: false
                }
        default:
            return state;
    }
}

export default uiReducer;