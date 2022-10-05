import axios from 'axios';


function fetchData(username) {
    return async dispatch => {
        dispatch({ type: 'LOADING', payload: username })
        try {
            const data2 = await fetch2(username)
            // let newArray = result.map(r => )
            console.log('test console')
            
            console.log(data2)
            dispatch({type: 'LOAD_RESULT', payload: data2})
            
        } catch(err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }

    }
};
export default fetchData

const fetch2 = async username => {
    try {
        const { result } = await axios.get(`https://api.github.com/users/${username}/repos`)
        return result;
    } catch (err) {
        // if (result.status === 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}
