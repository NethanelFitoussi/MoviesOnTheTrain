import { combineReducers } from 'redux';
import addFormReducer from './addform/reducer';
import weatherReducer from './weather/reducer';
import favoritesReducer from './favorites/reducer';


const rootReducer = combineReducers({
    addform: addFormReducer,
    weather: weatherReducer,
    favorites: favoritesReducer,
});

export default rootReducer;