import { setAddForm, setForecast } from '../..';
import ACTIONS from './actionTypes'


export const apiStart = label => {

    return {
        type: ACTIONS.START,
        payload: { label }
    };

};

export const apiSuccess = ( label, data ) => {

    return {
        type: ACTIONS.SUCCESS,
        payload: { label, data }
    };

};

export const apiError = ( label, error ) => {

    return {
        type: ACTIONS.ERROR,
        payload: { label, error }
    };

};


// make an api call
export const apiAction = ( payload ) => {

    return {
        type: ACTIONS.API,
        payload
    };

}


// get auto-complete suggestions from API
export const apiAddForm = ( query ) => {

    return apiAction({
        endpoint: '/search/shows',
        data: { q: query },
        onSuccess: setAddForm
    });

}

// get forecast by location key
export const apiForecast = () => {

    return apiAction({
        endpoint: `/shows`,
        data: {
            metric: true
        },
        onSuccess: setForecast
    });

}
