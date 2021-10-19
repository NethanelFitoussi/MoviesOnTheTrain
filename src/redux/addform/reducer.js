import ACTIONS from './actionTypes';


const defaultState = [];


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET:
            return setAddForm( payload.addform )

        default:
            return state;
    }

};

/*
    Helpers
*/
const setAddForm = ( addform ) => {

    let tmp = addform.slice( 0, 5 );

    // add LocationKey to the location object because the API response keys are not consistent
    tmp.map( ( location ) => location.LocationKey = location.Key );

    return tmp;

}


export default reducer;