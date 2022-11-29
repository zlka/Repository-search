import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchData from '../../actions'

import './style.css'

function SearchForm() {
    const [ hidden, setHidden ] = useState('')
    const [username, setUsername] = useState('')
    const loaded = useSelector(state => state.loaded)

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchData(username))
        setUsername('')
        setHidden(true)
    }

    function updateInput(e) {
        const input = e.target.value
        setUsername(input)
    }
    const activeClass = (loaded ? undefined : 'init')

    return (
        <div className={activeClass}>
            <header>
                <h1>GitHub Tracker</h1>
                <p hidden={hidden}>Search a username to find the repositories.</p>
            </header>

            <form onSubmit={handleSubmit}>
                <input id='searchBar'
                    type="text"
                    value={username}
                    onChange={updateInput}
                    placeholder='   Enter username...' required />

                <button 
                id='searchButton' 
                type="submit"
                > search</button>
            </form>
        </div>

    )
}

export default SearchForm
