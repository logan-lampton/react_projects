import { useState } from "react";

function TurthyFalsy() {
  const [truthy, setTruthy] = useState(true);
  const [falsy, setFalsy] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const codeExample = falsy || "show this text!";

  return (
    <>
      <div>
        <p>Falsy OR: {falsy || "returns the first true value"}</p>
        <p>Falsy AND: {falsy && "returns the first false value"}</p>
        <p>Truthy OR: {truthy || "returns the first true value"}</p>
        <p>Truthy AND: {truthy && "returns the first false value"}</p>
        {codeExample}
      </div>
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? "edit" : "add"}</button>
      {truthy ? <div>Shows if true</div> : <div>Please login</div>}
    </>
  );
}

export default TurthyFalsy;
