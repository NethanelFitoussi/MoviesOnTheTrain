import ACTIONS from './actionTypes';


const defaultState = {
    forecast: [],
    loading: {
        current: true
    }
};


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET_FORECAST:
            console.log('payload', payload);
            return {
                ...setLoading( state, false, 'forecast' ),
                forecast: payload.forecast
            };

        default:
            return state;
    }

};

export default reducer;

/*
    Helpers
*/

const setLoading = ( state, isLoading, type ) => {

    let updated = { ...state };
    updated.loading[type] = isLoading;

    return updated;

}