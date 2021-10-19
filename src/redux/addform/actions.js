import ACTIONS from './actionTypes';


export const setAddForm = ( addform ) => {

    return {
        type: ACTIONS.SET,
        payload: {
            addform
        }
    };

}