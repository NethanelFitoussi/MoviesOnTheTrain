import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIcon } from '../../hooks';
import { withErrorBoundary } from '../../HOCs';
import { apiForecast } from '../../redux/middlewares/api';
import { NavLink } from 'react-router-dom';
import './ForecastView.css';

function ForecastView()
{
    const dispatch = useDispatch();

    const list = useSelector( state => state.show );
    console.log('list', list);



    useEffect( () => {
        dispatch( apiForecast() );
    }, []);

    console.log('list.forecast', list.forecast);
    return (
        <div className="forecast-container">

            {
                list.forecast.map( ( f, i ) => {
                    return <ForecastDay forecast={ f } key={ i } />;
                })
            }

        </div>
    )
}


function ForecastDay({ forecast })
{

    const date = forecast.premiered;
    const icon = forecast.image.medium;
    const name = forecast.name;
    const summary = forecast.summary;
    const link = `/details/${forecast.id}`;


    var stripedHtml = `${summary.replace(/<[^>]+>/g, '').substring(0, 70)}...`;

    return (
        <div className="forecast-day">
            <NavLink exact to={link} >
                <img className="show-icon" alt={ name } src={ icon } />
                <div className="show-name">{ name }</div>
                <div className="show-description">
                    { stripedHtml }
                </div>
            </NavLink>
        </div>
    );

}

export default withErrorBoundary( ForecastView );