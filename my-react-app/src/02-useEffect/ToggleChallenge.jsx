import { useState } from "react";

function ToggleChallenge() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    return setToggle(!toggle);
  };

  return (
    <>
      <button onClick={handleToggle} className='btn'>
        Toggle
      </button>
      {toggle ? <div>Toggle On</div> : <div>Toggle Off</div>}
    </>
  );
}

export default ToggleChallenge;
