import React, { useState } from 'react'

const State = () => {
    const [count,setcount]=useState(0);
    const handleIncrement =()=>{
        setcount(count+1);
    }
    const handleDecrement=()=>
    {
        setcount(count-1);
    }
    const handleReset=()=>
    {
        setcount(0);
    }
    
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleDecrement}>Decrement</button>
    <button  onClick={handleIncrement}>Increment</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default State
