import React from "react";
import { useState } from "react";

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  };

  return <button onClick={handleClick}>{count}</button>;
}

export default ButtonCounter;
