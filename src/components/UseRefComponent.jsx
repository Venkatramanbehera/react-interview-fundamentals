import React, { useEffect, useRef } from 'react'

const UseRefComponent = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
    }, []);

    return (
        <>
            <h1 >UseRefComponent</h1>
            <input type={'text'} ref={inputRef} />
            <button onClick={() => { console.log(inputRef.current.value) }}>Click</button>
        </>
    )
}

export default UseRefComponent