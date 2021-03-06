import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './FavoriteBox.css';

function FavoriteBox({ favorite })
{
    const dispatch = useDispatch();

    console.log('favorite', favorite);

    return (
        <div className="favorite-box" >

            <h3 className="location-name">
                { favorite.LocalizedName }
            </h3>

            <ShowData location={ favorite }/>

        </div>
    )
}


// display show data after loading
function ShowData({ location })
{
    console.log('location', location);
    let {

        image: image,
        summary: summary,
        name: name,
        premiered: year,
        genres: tags

    } = location[0];

    const day = year.toString().split( '-' )[0];
    summary = `${summary.replace(/<[^>]+>/g, '')}`;

    return (
        <>
            <div className="temperature">
                <img className="details-icon" alt={ name } src={ image.medium } />
                {/* <span>{ temperature }°</span> */}
            </div>
            <span className="details-text">{ name }</span>

            <span className="details-text">Year: { day }</span>
            <span className="details-text">Tags: { tags }</span>
            <span className="details-text">Details: { summary }</span>
        </>
    );
}


export default FavoriteBox;