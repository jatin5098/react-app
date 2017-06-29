import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

import appReducer from './reducers/appReducer.js';

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action: ' , action);
    next(action);
};

const store = createStore(
    combineReducers({appReducer}), 
    {}, 
    applyMiddleware(myLogger, promise())
);
export default store;