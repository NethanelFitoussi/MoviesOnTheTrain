import { applyMiddleware, createStore } from 'redux';
import { apiMiddleware } from './middlewares/api';
import { loggerMiddleware } from './middlewares/logger';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// configure & initialize persist reducer
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'favorites'
    ]
};

const pReducer = persistReducer( persistConfig, rootReducer );


// set store middlewares
let middlewares = [
    apiMiddleware
];

// add development middlewares
if( process.env.NODE_ENV === 'development' )
{
    middlewares.push( loggerMiddleware );
}


const store = createStore( pReducer, applyMiddleware( ...middlewares ) );
export const persistor = persistStore( store );

export default store;