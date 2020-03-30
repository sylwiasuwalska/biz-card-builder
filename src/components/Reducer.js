const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.value
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.value
            };
        case 'SET_TELEPHONE':
            return {
                ...state,
                telephone: action.value
            };
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.value
            };
        default:
            return state;
    }
};

export default Reducer;