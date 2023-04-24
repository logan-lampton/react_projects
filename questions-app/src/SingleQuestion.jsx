// import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ id, title, info, activeId, toggleQuestion }) {
  //   const [showInfo, setShowInfo] = useState(false);

  const isActive = id === activeId;

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {!isActive ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isActive && <p className='text-small'>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
