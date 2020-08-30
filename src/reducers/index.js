
import { combineReducers } from 'redux';

import TopicsReducer from './reducerTopics';



const rootReducer = combineReducers({

    topics : TopicsReducer

});

export default rootReducer;
