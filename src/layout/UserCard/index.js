import React from 'react'
import { useSelector } from "react-redux";

const UserCard = () => {
    const username = useSelector(state => state.username)
    let userStats = `http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=nord_dark&&hide_border`

    return (
        <>
        <img src={userStats} alt="User stats" style={{marginBottom: '20px'}} />
        </>
    )
};

export default UserCard
