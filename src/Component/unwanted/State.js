import React, {useState}from 'react'

const State = () => {
    const [count, setcount] = useState(0);
  return (
    <div>
    <p>counter : {count}</p>
    <button onClick={()=>{setcount(count+1)}}>increment</button>
    <button onClick={()=>{setcount(count-1)}}>Decrement</button>
    </div>
  )
}
export default State