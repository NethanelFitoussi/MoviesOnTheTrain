import { apiError, apiStart, apiSuccess } from './actions';
import ACTIONS from './actionTypes';
import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_API_URL;

const apiMiddleware = ({ dispatch }) => next => action => {

    // throw non-api requests
    if( action.type !== ACTIONS.API )
        return next( action );


    // destruct label from payload & dispatch api start action.
    // `label` is useful to determine which api call returned the message
    const { label = '' } = action.payload;
    dispatch( apiStart( label ) );


    // destruct request options from payload
    let {

        endpoint = '',
        method = 'GET',
        data = {},
        headers = {},
        onSuccess = () => ({ type: '' }),
        onError = () => ({ type: '' }),
        callback = () => {}

    } = action.payload;

    let url = baseURL + endpoint;
    let options = { method, mode: 'cors', redirect: 'follow', headers };


    // if it's GET, add `data` as query string
    if( method === 'GET' )
    {
        const queryString = Object.keys( data ).map( key => ( key + '=' + data[key] )).join( '&' );
        url += '?' + queryString;
    }

    // other methods
    else
    {
        options.body = JSON.stringify( data );
    }

    // make the request
    fetch( url, options )

        .then( async res => {

            const data = await res.json();

            // catch non-2xx HTTP codes
            if( ![200, 201].includes( res.status ) )
                return Promise.reject( data );

            // successful request
            dispatch( apiSuccess( label, data ) );
            dispatch( onSuccess( data ) );

            if( typeof callback === 'function' )
                callback( data );
        })

        // request error
        .catch( error => {

            dispatch( apiError( label, error ) );
            dispatch( onError( error ) );
            toast.error( 'An error has occurred while fetching fata. Try again later.', { toastId: 'toast-error-api' } );

        });

}

export default apiMiddleware;