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
        case 'SET_AGE_FULFILLED':
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;