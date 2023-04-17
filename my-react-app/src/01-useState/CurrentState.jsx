import React from "react";
import { useState } from "react";

function CurrentState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentState) => {
        const newState = currentState + 1
        return newState
    });
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
