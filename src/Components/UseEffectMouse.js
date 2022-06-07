import React, { useState, useEffect } from "react";

function UseEffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // defining event listener
  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  // here useEffect is called only on initial render and then forget about it because dependency array is empty hence it's doesnot depends on any state variable
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      Hooks x-{x} y-{y}
    </div>
  );
}

export default UseEffectMouse;
