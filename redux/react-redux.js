import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ReduxComponent from './components/Redux.jsx';

const appState = {
    state: 'Initial State',
    res: 1
};

const userReducer = (state = {
    name: 'Jatin',
    age: 26
}, action) => {
    switch (action.type) {
        case 'SET_USER':
            state = {
                ...state,
                name: action.payload
            };
            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const mathReducer = (state = appState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                res: state.res  + action.payload
            };
            
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                res: state.res  - action.payload
            };
            break;            
    }
    return state;
};
const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action: ' , action);
    next(action);
};
const store = createStore(combineReducers({userReducer, mathReducer}), {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store = {store}>
        <ReduxComponent />
    </Provider>, document.getElementById('app'));