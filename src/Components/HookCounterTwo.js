import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  /*
 // this function is proving that why it's unsafe and giving wrong output by clicking "Increament 5" button
  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  */

  // second form of setCount mtd which has an argument as an arrow function & having access to prev state(this is the safer option to update state based on previous state value)
  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* unsafe to use 
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button> */}
      {/*Below is the safer option*/}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Increament
      </button>
      <button onClick={increamentFive}>Increament 5</button>
    </div>
  );
}

export default HookCounterTwo;

//Note: onClick={() => setCount(count + 1)} although it's working but this is very unsafe way to changing state
