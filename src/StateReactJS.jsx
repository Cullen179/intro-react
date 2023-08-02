import React, { useState } from 'react'; 

function ClickCounter() { 
  const [count, setCount] = useState(0); 
  const handleClick = () => { 
    setCount(count + 1); 
  }; 

  return ( 
    <div> 
      <button onClick={handleClick}>Click me!</button> 
      <p>Click count: {count}</p> 
    </div> 
  ); 
} 