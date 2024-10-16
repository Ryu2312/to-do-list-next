"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-blue-950 dark:bg-gray-800 rounded-full"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
