"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
    </button>
  );
}
