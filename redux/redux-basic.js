import { createStore } from 'redux';
const appState = {
    state: 'Initial State',
    res: 1
};
const reducer = (state, action) => {
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
const store = createStore(reducer, appState);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'SUBSTRACT',
    payload: 10
});