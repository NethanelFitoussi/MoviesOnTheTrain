import { combineReducers } from 'redux';
import addFormReducer from './addform/reducer';
import showReducer from './show/reducer';
import favoritesReducer from './favorites/reducer';


const rootReducer = combineReducers({
    addform: addFormReducer,
    show: showReducer,
    favorites: favoritesReducer,
});

export default rootReducer;