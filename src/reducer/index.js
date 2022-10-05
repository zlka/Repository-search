const initState = {
    username: '',
    repos: [],
    loading: false,
}

const searchReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, username: action.payload, loading: true, error: false};
        case 'LOAD_RESULT':
            return {...state, repos: action.paylod, loading: false, error: false }    
        case 'SET_ERROR':
            return{...state, error:action.payload, loading: false}
        default:
            return state;
    };
};

export default searchReducer;
