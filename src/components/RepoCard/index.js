import React, { useState } from 'react';
import './style.css'

function RepoCard ({repository}) {
    const {name, description, date, forks,stargazers, privacy, fullName } = repository
    const [expanded, setExpanded] = useState(true)
    const [textC, setTextC] = useState("#e8eaea")

    let repoLink = `https://github.com/${fullName}`
    function expand () {
        setExpanded(!expanded)
    }

    const changeTextColour =  (colour) => {
        setTextC(colour)
    }
    return (
        <div className='card' onClick={expand}>

        <a
        style={{color: textC, textDecoration: "none"}}
        onMouseLeave={() => {changeTextColour('#e8eaea')}}
        onMouseEnter={() => {changeTextColour('#58a6ff')}}
         href={repoLink} 
         target='blank'>
        <h1>{name}</h1>
        </a>
        { description !== null ? <p >Description: {description} </p> : "No Description"}
        {/* <p >Description:{description} </p> */}
        
        <p hidden={expanded}>Date Created: {{date}.date.slice(0,10)}</p>
        
        
        <p hidden={expanded}>Number of Forks: {forks}</p>
        <p hidden={expanded}>Stargazers: {stargazers}</p>
        <p className = 'priv' >{privacy}</p>
        
        </div>
    )
}



export default RepoCard;
