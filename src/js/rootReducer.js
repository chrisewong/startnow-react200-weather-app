import { combineReducers } from 'redux';
import SearchReducer from '../js/components/Search/SearchReducer';

const rootReducer = combineReducers({
    searched: SearchReducer,
    
});

export default rootReducer;
