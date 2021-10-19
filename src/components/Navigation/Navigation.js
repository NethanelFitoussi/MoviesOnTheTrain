import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation()
{

    return (
        <div className="navigation-container">

            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </div>
    )
}

export default Navigation;