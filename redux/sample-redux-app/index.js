import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import AppComponent from './components/AppComponent.jsx';
import appReducer from './reducers/appReducer.js';

ReactDOM.render(
    <Provider store = {store}>
        <AppComponent />
    </Provider>, document.getElementById('app')
);