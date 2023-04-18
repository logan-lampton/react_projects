import React, { useEffect, useState } from "react";

function Fundementals() {
  const [helloCount, setHelloCount] = useState(0);
  const [showHellos, setShowHellows] = useState([]);
  const hellos = [];

  const increaseHello = () => {
    setHelloCount(helloCount + 1);
    addHellos();
  };

  const addHellos = () => {
    for (let i = -1; i < helloCount; i += 1) {
      hellos.push("Hello!");
    }
    setShowHellows(hellos)
  };

  useEffect(() => {
    console.log("Hello from useEffect!");
  }, []);

  return (
    <>
      <button className='btn' onClick={increaseHello}>
        Say hello!
      </button>
      <div>
        <h2>{showHellos}</h2>
      </div>
    </>
  );
}

export default Fundementals;
