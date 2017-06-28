const appState = {
    state: 'Initial State',
    res: 1
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
export default mathReducer;