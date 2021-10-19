import ACTIONS from './actionTypes';


export const addFavorite = ( location ) => {

    return {
        type: ACTIONS.ADD,
        payload: { location }
    };

}

export const removeFavorite = ( location ) => {

    return {
        type: ACTIONS.REMOVE,
        payload: { location }
    };

}

export const setFavoriteCurrentShow = ( [ show ], locationKey ) => {

    show = show || {};

    return {
        type: ACTIONS.SET_WEATHER,
        payload: {
            locationKey,
            show
        }
    };

}