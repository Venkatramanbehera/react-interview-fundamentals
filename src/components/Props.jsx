import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Home = () => {
    const [userName] = useState(0)
    return (
        <div>
            <h1>HomePage</h1>
            <User userName={userName} />
        </div>
    )
}

const User = ({ userName, age, updateProfile }) => {
    return (
        <div>
            <h1>Welcome , {userName} </h1>
            <p> age - {age} </p>
            <button onClick={updateProfile}>Update Profile</button>
        </div>
    )
}

User.prototype = {
    userName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    updateProfile: PropTypes.func.isRequired
}

export default Home