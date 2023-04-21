import { useState, useEffect } from "react";

function CleanUp() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    return setToggle(!toggle);
  };

  return (
    <div>
      <button className='btn' onClick={handleToggle}>
        Toggle
      </button>
      {toggle && <SecondComponent />}
    </div>
  );
}

function SecondComponent() {
  useEffect(() => {
    console.log("renders each time the component loads");
    const intId = setInterval(() => {
      // keeps running even if the component is toggled off
      console.log("timed message");
    }, 1000);
    // clean up function
    // stops the interval when the component isn't displayed
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <div>Reset</div>;
}

export default CleanUp;
