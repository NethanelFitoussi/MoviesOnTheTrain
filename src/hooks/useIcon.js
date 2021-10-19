// get show icon url by its id
export const useIcon = ( id ) => {

    return `${ process.env.REACT_APP_IMAGES_URL }${ id }.svg`;

}