import axios from 'axios';

function createArray (r) {
    const repoData = {name: r.name, description: r.description, date: r.created_at, avatar: r.owner.avatar_url, forks: r.forks, privacy: r.visibility, stargazers: r.stargazers_count}
    return repoData
}


function fetchData(username) {
    return async dispatch => {
        dispatch({ type: 'LOADING', payload: username })
        try {
            const repoList = await fetch2(username)
            console.log('data', repoList)

            let newArray = repoList.map(r => createArray(r))
            console.log('new array', newArray)
            
            dispatch({type: 'LOAD_RESULT', payload: newArray})
        } catch(err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }
};
export default fetchData


const fetch2 = async username => {

    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
        return data;
    } catch (err) {
        // if (data.status == 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}
