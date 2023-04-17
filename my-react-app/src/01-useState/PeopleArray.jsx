import { useState } from "react";
import { data } from "../data";

function PeopleArray() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newArray = people.filter((person) => {
      if (person.id !== id) {
        return person;
      }
    });
    setPeople(newArray);
  };

  const clearList = () => {
    setPeople([]);
  };

  return (
    <>
      <div>
        <h1>Array of People</h1>
        <div>
          {people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id}>
                <h4>{name}</h4>
                <button
                  onClick={() => removePerson(id)}
                  type='button'
                  className='btn'
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button
          onClick={clearList}
          type='button'
          className='btn'
          style={{ marginTop: "2rem" }}
        >
          Clear List
        </button>
      </div>
    </>
  );
}

export default PeopleArray;
