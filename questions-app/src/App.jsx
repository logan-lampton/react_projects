import { useState } from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data)

  return <h2><Questions questions={questions}/></h2>;
};

export default App;