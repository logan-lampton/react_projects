import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitalDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitalDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  // set to Dark Mode based on preference; runs on first render and each time the Dark/Light Mode is toggled
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
