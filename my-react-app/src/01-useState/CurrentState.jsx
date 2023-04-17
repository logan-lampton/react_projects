import React from "react";
import { useState } from "react";

function CurrentState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // need to use currentState to have the value increase for each time we click during the setTimeout delay (otherwise it just returns the value before the first click + 1)
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick} type='button' className='btn'>
        Add!
      </button>
    </>
  );
}

export default CurrentState;
