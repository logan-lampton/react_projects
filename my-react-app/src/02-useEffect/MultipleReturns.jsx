import React from "react";
import { useEffect, useState } from "react";

function MultipleReturns() {
  // boolean
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Fully Loaded</h2>;
}

export default MultipleReturns;
