import React from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = { hasError: false };
    }

    componentDidCatch()
    {
        this.setState({ hasError: true })
    }

    static getDerivedStateFromError( error )
    {
        return { hasError: true };
    }

    render()
    {
        if( this.state.hasError )
        {
            return (
                <p className="error-boundary">
                    Something went wrong with this part of the page. Try refreshing the page.
                </p>
            );
        }

        return this.props.children; 
    }
}