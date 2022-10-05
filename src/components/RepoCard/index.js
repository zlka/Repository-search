import React, { useState } from 'react';
import './style.css'

function RepoCard ({repository}) {
    const {name, description, date, forks,stargazers, privacy } = repository
    const [expanded, setExpanded] = useState(true)
    const [textC, setTextC] = useState("#e8eaea")

    function expand () {
        setExpanded(!expanded)
    }

    const changeTextColour =  (colour) => {
        setTextC(colour)
    }
    return (
        <div className='card' onClick={expand}>
        <h1 
        style={{color: textC}}
        onMouseLeave={() => {changeTextColour('#e8eaea')}}
        onMouseEnter={() => {changeTextColour('#58a6ff')}}
         >{name}</h1>
        <p >Description: {description}</p>
        <p hidden={expanded}>Date: {{date}.date.slice(0,10)}</p>
        
        
        <p hidden={expanded}>Number of Forks: {forks}</p>
        <p hidden={expanded}>Stargazers: {stargazers}</p>
        <p className = 'priv' >{privacy}</p>
        
        </div>
    )
}



export default RepoCard;
