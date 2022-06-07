import React, { useState } from "react"; // useState is named import
// step-1 creating functional component for counter state management
function HookCounter() {
  // step-2&3 setting a state variable and also a function to update state through useState
  const [count, setCount] = useState(0); // here state variable count is initialised with value 0 & a method setcount is available to change it's state

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default HookCounter;

//Note: onClick={()=>setCount(count+1)} if we have to call event handler function by passing argument then we must convert it into arrow function
