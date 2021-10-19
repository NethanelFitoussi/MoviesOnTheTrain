import React from 'react';
import { Link } from 'react-router-dom';

function NotFound()
{
    return (
        <div className="not-found-container">
            <h1>Not Found!</h1>
            <p>Hey, looks like there is nothing here...</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound;