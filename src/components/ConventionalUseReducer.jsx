import React from 'react'

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + action.payload.step
            }
        case "decrement":
            return {
                ...state,
                count: state.count - action.payload.step
            }
        case "clear":
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

const step = 3;

const Counter = () => {
    const [state, dispatch] = React.useReducer(countReducer, initialState);
    const increment = () => dispatch({
        type: 'increment',
        payload: {
            step
        }
    })
    const decrement = () => dispatch({
        type: 'decrement',
        payload: {
            step
        }
    })
    const clear = () => dispatch({
        type: 'clear'
    })
    return (
        <div>
            <h3>Counter Value : {state.count} </h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={clear}>clear</button>
        </div>
    )
}

export default Counter