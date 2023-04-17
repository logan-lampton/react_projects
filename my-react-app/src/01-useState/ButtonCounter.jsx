import React from "react";
import { useState } from "react";

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
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

export default ButtonCounter;
