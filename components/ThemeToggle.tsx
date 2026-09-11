"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme, animate = false) => {
  const root = document.documentElement;

  if (animate) {
    document.body.classList.add("theme-transition");
    window.setTimeout(() => document.body.classList.remove("theme-transition"), 320);
  }

  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const nextTheme: Theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : systemTheme;

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme, true);
  };

  return (
    <button
      type="button"
      className={`theme-toggle theme-toggle--${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
