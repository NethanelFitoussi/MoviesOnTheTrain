import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { withStore, withRouter, withToasts } from './HOCs';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Details, Home, NotFound } from './pages';
import { setForecastLoading } from './redux';

import './css/App.css';


function App()
{
	const dispatch = useDispatch();


	// fetch default location data on load
	dispatch( setForecastLoading( false ) );



	return (
		<div className={ `app-container` }>
			<Header />

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/details/:id">
					<Details />
				</Route>

				<Route>
					<NotFound />
				</Route>

			</Switch>
		</div>
	);
}

export default compose(
	withStore,
	withRouter,
	withToasts
)( App );