import React from 'react'

function userNameReducer(curUser, newUser) {
    return newUser;
}

const defaultUser = 'Tony';

const NameInput = () => {
    const [name, setName] = React.useReducer(userNameReducer, defaultUser);
    const handleChange = e => setName(e.target.value);
    return (
        <div>
            <label>
                User Name :- <input value={name} onChange={handleChange} />
            </label>
            <h3>You Type : {name} </h3>
            <CounterComponent />
        </div>
    )
}

const countReducer = (currCount, step) => {
    return currCount + step;
}

const initialCount = 0;
const step = 3;

const CounterComponent = () => {
    const [count, setCount] = React.useReducer(countReducer, initialCount);
    const increment = e => setCount(step);
    return (
        <div>
            <h3>Counter Value : {count} </h3>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default NameInput