import React from "react";
import SingleQuestion from "./SingleQuestion";

function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
