import ACTIONS from './actionTypes';
import { toast } from 'react-toastify';


const defaultState = []


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.ADD:
            return add( state, payload.location );

        case ACTIONS.REMOVE:
            return remove( state, payload.location );

        case ACTIONS.SET_WEATHER:
            return setShow( state, payload.locationKey, payload.show );

        default:
            return state;
    }

};

export default reducer;

/*
    Helpers
*/

const add = ( state, location ) => {

    let updated = remove( state, location, false );
    updated.push( location );

    return updated;

}

const remove = ( state, location, showToast = true ) => {

    let updated = state.filter( f => ( f.LocationKey !== location.LocationKey ));

    return updated;

}

const setShow = ( state, locationKey, show ) => {

    const id = state.findIndex( l => ( l.LocationKey === locationKey ) );

    if( id === -1 )
        return state;

    let updated = [ ...state ];
    updated[id].currentShow = show;

    return updated;

}