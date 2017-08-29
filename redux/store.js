import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import mathReducer from './reducers/mathReducer';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action: ' , action);
    next(action);
};
const store = createStore(
    combineReducers({userReducer, mathReducer}), 
    {}, 
    applyMiddleware(myLogger, thunk, promise())
);
store.subscribe(() => {
    console.log(store.getState());
});

export default store;    