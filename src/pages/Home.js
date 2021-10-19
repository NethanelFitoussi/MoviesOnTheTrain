import React from 'react';
import { ForecastView } from '../components/ForecastView';
import { AddForm } from '../components/AddForm';

function Home()
{
    return (
        <>
			<AddForm />
			<ForecastView />
        </>
    )
}

export default Home;