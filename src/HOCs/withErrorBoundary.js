import React from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const withErrorBoundary = ( WrappedComponent ) => {

    return class extends React.Component
    {
        render()
        {
            return (
                <ErrorBoundary>
                    <WrappedComponent { ...this.props } />
                </ErrorBoundary>
            );
        }
    }

}

export default withErrorBoundary;