const initialState = {
    author: 'jatin',
    displayList: [
        {topic: 'react', duration: '20'},
        {topic: 'angular', duration: '26'},
        {topic: 'angular2', duration: '28'}
    ]
};
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW':
            const newList = {
                topic: 'new topic',
                duration: '44'
            };
            state.displayList.push(action.payload);
            state = {
                ...state
            }
            break;
    }
    return state;
};

export default appReducer;