import { useState } from "react";

function ObjectExample() {
  const [person, setPerson] = useState({
    name: "First Name",
    age: 11,
    hobby: "Coding",
  });

  const randomUser = () => {
    setPerson({
      name: "Second Name",
      age: 22,
      hobby: "Rerendering",
    });
    // setPerson({...person, name: 'Susan'})
  };

  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <h3>Age: {person.age}</h3>
        <h4>Enjoys: {person.hobby}</h4>
      </div>
      <button type='button' className='btn' onClick={randomUser}>
        Randomize
      </button>
    </>
  );
}

export default ObjectExample;
