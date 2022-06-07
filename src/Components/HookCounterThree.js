import React, { useState } from "react";

function HookCounterThree() {
  // state variable as an object
  // here we got to know why we are using spread operator because useState setter function doesnot automatically merge and the update the state property value, we have to do it manually with the help of spread operator
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h2>Your firstName is {name.firstName}</h2>
        <h2>Your lastName is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;

/* Note:  onChange={(event) => setName({ ...name,firstName: event.target.value })}

how we read this 
on clicking the button, how state changing happen is like that......
hey just copy the previous state and only update the firstName key value with the user entered value 

*/
