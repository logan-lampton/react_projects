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
  }, []);
  return <div>Reset</div>;
}

export default CleanUp;
