import { useFormState } from "react-dom";

import React from 'react'
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>You clicked Count :{count} times</h1>
        <button onClick={() => setCount(count+1) }>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter