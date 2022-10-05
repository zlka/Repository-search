const initState = {
    username: '',
    repos: ['starting'],
    loading: false,
    loaded: false
}

const searchReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, username: action.payload, loading: true, error: false, loaded: false};
        case 'LOAD_RESULT':
            return {...state, repos: action.payload, loading: false, error: false, loaded: true }    
        case 'SET_ERROR':
            return{...state, error:action.payload, loading: false}
        default:
            return state;
    };
};

export default searchReducer;
