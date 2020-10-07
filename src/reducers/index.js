
import { combineReducers } from 'redux';

import OrderReducer from './reducerOrder';
import AuthReducer from './reducerAuth';



const rootReducer = combineReducers({

    order : OrderReducer,
    auth : AuthReducer

});

export default rootReducer;
