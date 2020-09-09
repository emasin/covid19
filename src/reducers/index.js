
import { combineReducers } from 'redux';

import OrderReducer from './reducerOrder';



const rootReducer = combineReducers({

    order : OrderReducer

});

export default rootReducer;
