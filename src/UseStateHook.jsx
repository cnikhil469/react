import React, { useState } from 'react'


function UseStateHook() {
    const [Count, setCount] = useState(0)

    function incrementCount() {
        setCount((abc) => {
            return abc + 1
        })
        setCount((abc) => {
            return abc + 1
        })
    }

    function decrementCount() {
        setCount((prevCount) => {
            return prevCount-1
        })
        setCount((prevCount) => {
            return prevCount-1
        })
    }

    return (
        <article className=''>
            <button onClick={decrementCount} >press me -</button>
            <span>{Count}</span>
            <button onClick={incrementCount}>+</button>
            <p className='text-'>hello this is tailwind practice</p>
        </article>
    )
}


export default UseStateHook