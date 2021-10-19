import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams  } from 'react-router-dom';
import { setCurrentWeatherLoading, setForecastLoading } from '../../redux';
import { apiForecast } from '../../redux/middlewares/api';
import { FavoriteBox } from '../FavoriteBox';
import { withErrorBoundary } from '../../HOCs';
import './DetailsView.css';

function DetailsView()
{
    const list = useSelector( state => state.weather );
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;


    const thisShow = list.forecast.filter( (f) => {
        if (f.id === parseInt(id))
        {
            return f
        }
    })



    // redirect the user to full forecast view of the selected location
    const fullForecast = ( location ) => {

        dispatch( apiForecast( location ) );

        history.push( '/' );

    };

    return (
        <div className="favorites-view">

            <h1>
                Details:
            </h1>

            { thisShow.length === 0 &&
                <p className="no-favorites">
                    I don't have this reference in memory.
                </p>
            }

            <div className="favorites-container">

                {
                    thisShow.length > 0 &&
                    <FavoriteBox favorite={ thisShow } key={ thisShow.id } />
                }
            </div>
        </div>
    )
}

export default withErrorBoundary( DetailsView );