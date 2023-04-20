import { useState } from "react";

function ToggleChallenge() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    return setToggle(!toggle);
  };

  return (
    <>
    {toggle ? 
    <button onClick={handleToggle} className='btn' style={{backgroundColor: 'green'}}>
    Toggle
  </button> :
    <button onClick={handleToggle} className='btn' style={{backgroundColor: 'red'}}>
    Toggle
  </button>
}
    </>
  );
}

export default ToggleChallenge;
