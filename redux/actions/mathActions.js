export  function setUser() {
    return {
        type: 'SET_USER',
        payload: 'A new redux user'                
    };
};
export  function setAge(age) {
    return {
        type: 'SET_AGE',
        payload: age               
    };
};