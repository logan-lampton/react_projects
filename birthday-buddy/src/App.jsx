import { useState } from "react";
import data from "./data";
import List from './components/List';
import Person from './components/Person';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>There are {people.length} birthdays today:</h3>
          <List people={people}/>
        </section>
      </main>
    </>
  );
}

export default App;
