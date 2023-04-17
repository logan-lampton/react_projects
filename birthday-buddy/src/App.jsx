import { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  
  return <h2>{people.map((person) => {
    return (
      <main key={person.id}>
      <div>
        <img src={person.image}></img>
        <div>{person.name}</div>
        <div>{person.age}</div>
      </div>
      </main>
    )
  })}</h2>;
}

export default App;
