import axios from 'axios';

function createArray (r) {
    const repoData = {name: r.name, description: r.description, date: r.created_at, avatar: r.owner.avatar_url, forks: r.forks, privacy: r.visibility, stargazers: r.stargazers_count , fullName: r.full_name}
    return repoData
}


function fetchData(username) {
    return async dispatch => {
        dispatch({ type: 'LOADING', payload: username })
        try {
            const repoList = await fetch2(username)
            let newArray = repoList.map(r => createArray(r))
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
        throw new Error(err.message)
    }
}
// add another fetch for commit data
// const fetchCommits = async (username,name) => {

//     try {
//         const { data } = await axios.get(`https://api.github.com/users/${username}/${name}`)
//         return data;
//     } catch (err) {
//         throw new Error(err.message)
//     }
// }
