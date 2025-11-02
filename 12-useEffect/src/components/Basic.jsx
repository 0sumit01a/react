import React, { useEffect, useState } from 'react'


const Basic = () => {
const [count,setCount]  = useState(0);
const [renderCount,setRenderCount]  = useState(0);
useEffect(() => {
    setRenderCount(renderCount + 1);
    console.log("Component Rendered");
    
},[count]);
    return (
    <div>
      <div>
         <h1>Render Counter</h1>
      <p>Component rendered: <b>{renderCount}</b> times</p>
      <p>Count: <b>{count}</b></p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </div>
  )
}

export default Basic
