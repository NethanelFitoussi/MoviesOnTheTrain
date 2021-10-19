import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

const withStore = ( WrappedComponent ) => {

    return class extends React.Component
    {
        render()
        {
            return (
                <Provider store={ store }>
                    <WrappedComponent { ...this.props } />
                </Provider>
            );
        }
    }

}

export default withStore;