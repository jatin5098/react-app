import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ReduxComponent from './components/Redux.jsx';

ReactDOM.render(
    <Provider store = {store}>
        <ReduxComponent />
    </Provider>, document.getElementById('app'));