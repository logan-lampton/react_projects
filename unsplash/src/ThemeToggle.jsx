import React from "react";
import { useGlobalContext } from "./context";

function ThemeToggle() {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return <h2>{greeting}</h2>;
}

export default ThemeToggle;
