import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
