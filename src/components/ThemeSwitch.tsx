"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const light = theme === "light";

  return (
    <div>
      <button
        onClick={onClick}
        className="grid grid-cols-2 rounded-full bg-gray-200 px-2 py-1 duration-200 active:opacity-60 dark:bg-gray-800"
      >
        <div
          className={`text-lg duration-300 ${
            light
              ? "translate-x-0 rotate-0"
              : "translate-x-full rotate-[360deg]"
          }`}
        >
          {light ? <Sun weight="fill" /> : <Moon weight="fill" />}
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitch;
