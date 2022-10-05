import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import fetchData from '../../actions'

function SearchForm() {

    const [ username, setUsername] = useState('')   
    const dispatch = useDispatch()

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(fetchData(username))
        // setUsername('')
    }

    function updateInput (e) {
        const input = e.target.value
        setUsername(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={updateInput} />
            <input type="submit" value={"Search"} />
        </form>

    )
}

export default SearchForm
