import React, {useState} from 'react'

function UseStateHook() {
    const [Count, SetCount] = useState(0);
    
    function decrementCount() {
        SetCount((Count)=>{
            Count=Count-1
        })
    }

    function incrementCount() {
        SetCount((Count)=>{
            Count=Count+1
        })
    }
    console.log("count: ", Count)
    return (
        <article>
            <button className="button" onClick={decrementCount}>-</button>
            {Count}
            <button className="button" onClick={incrementCount}>+</button>
        </article>
    ) 
}

export default UseStateHook