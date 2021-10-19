import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddForm, setCurrentWeatherLoading, setForecastLoading } from '../../redux';
import { apiAddForm, apiForecast } from '../../redux/middlewares/api';
import { withErrorBoundary } from '../../HOCs';
import { useFavorite } from '../../hooks';
import './AddForm.css';


function AddForm()
{
    const [ value, setValue ] = useState( '' );
    const [ currentItem, setCurrentItem ] = useState( -1 );
    const [ loading, setLoading ] = useState( false );
    const dispatch = useDispatch();
    const suggestions = useSelector( state => state.AddForm );
    const [ addToList ] = useFavorite();


    // handle search term changes
    useEffect( () => {

        const timeout = setTimeout( showAddForm, 300 );

        return() => { clearTimeout( timeout ); }

    // eslint-disable-next-line
    }, [ value ]);


    // show AddForm when user finished typing
    const showAddForm = () => {

        const term = value.trim();

        if( !term )
        {
            dispatch( setAddForm( [] ) );
            return;
        }

        setLoading( true );
        dispatch( apiAddForm( term ) );

    };


    // hide loader when suggestions where loaded
    useEffect( () => { setLoading( false ) }, [ suggestions ]);


    return (
        <form className="add-form" onSubmit={ e => e.preventDefault() }>

            { loading &&
                <span className="add-loader"></span>
            }

            <input value="Create new"
                type="button"
                placeholder="Create new"
                className="button-add"
                onClick={ e => setValue( e.target.value ) }
            />

            <div className="">
                <form>
                    <div>
                        Nom : <input type="text" value=""  />
                    </div>
                    <div>
                        Year : <input type="text" value=""  />
                    </div>
                    <div>
                        Tags : <input type="text" value=""  />
                    </div>
                    <div>
                        Image : <input type="text" value=""  />
                    </div>
                    <div>
                        Description : <input type="text" value=""  />
                    </div>
                    <input type="submit" value="Send" className="button-add" />
                </form>
            </div>
        </form>
    )
}

export default withErrorBoundary( AddForm );