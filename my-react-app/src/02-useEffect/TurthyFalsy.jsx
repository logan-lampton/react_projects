import { useState } from "react";

function TurthyFalsy() {
  const [truthy, setTruthy] = useState(true);
  const [falsy, setFalsy] = useState(false);

  return (
    <div>
       <p>Falsy OR: {falsy || 'returns the first true value'}</p>
       <p>Falsy AND: {falsy && 'returns the first false value'}</p>
       <p>Truthy OR: {truthy || 'returns the first true value'}</p>
       <p>Truthy AND: {truthy && 'returns the first false value'}</p>
    </div>
  )
}

export default TurthyFalsy;
