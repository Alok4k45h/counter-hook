import React, { useState, useEffect } from "react";

function UseEffectCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // changing the document title using useEffect which causes sideEffects in components after every render
  useEffect(() => {
    console.log("useEffect- updating document title or use effect called");
    document.title = `you clicked ${count} times`;
  }, [count]);

  // above second parameter in useEffect function i.e [count] assures that useEffect be only called when count state variable changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default UseEffectCounterOne;
