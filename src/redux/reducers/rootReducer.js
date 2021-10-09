import { combineReducers } from 'redux';
import uiReducer from './uiReducer';

import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer
});

export default rootReducer;