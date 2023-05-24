import { useState } from "react";
import Cocktail from "../components/Cocktail";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <main>
      <SearchForm />
      <Cocktail />
    </main>
  );
}
