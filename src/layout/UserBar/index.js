// import React from 'react'
import './style.css'

import { useSelector } from "react-redux";

function UserBar () {
    const username = useSelector(state => state.username)
    // const avatar = useSelector(state => state.repos[0].avatar)
    // console.log(avatar)

    return (
        <div>
            <p className="username">{username}</p>
            {/* <img src={avatar} alt="avatar" /> */}
        </div>
    )
}

export default UserBar
