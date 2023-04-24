import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(id)
  } 

  return (
    <h2>
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
    </h2>
  );
};

export default App;
