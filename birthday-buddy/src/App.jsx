import { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  
  return <h2>{people.map((person) => {
    return (
      <div key={person.id}>
        <img src={person.image}></img>
        <div>{person.name}</div>
        <div>{person.age}</div>
      </div>
    )
  })}</h2>;
}

export default App;
