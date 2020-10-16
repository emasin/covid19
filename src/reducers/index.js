
import { combineReducers } from 'redux';
import OrderManageReducer from './reducerOrderManage';
import OrderReducer from './reducerOrder';
import AuthReducer from './reducerAuth';



const rootReducer = combineReducers({

    order : OrderReducer,
    user : AuthReducer,
    orderManage : OrderManageReducer

});

export default rootReducer;
