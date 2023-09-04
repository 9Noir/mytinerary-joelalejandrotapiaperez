import React, { useEffect, useRef } from "react";

export default function ThemeSwitcher({ className }) {
    const darkModeBtn = useRef(null);
    useEffect(() => {
        setDarkMode();
    }, []);

    function setDarkMode() {
        document.documentElement.classList.toggle("dark", localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches));
        darkModeBtn.current.classList.toggle("fa-solid", document.documentElement.classList.contains("dark"));
        darkModeBtn.current.classList.toggle("fa-regular", !document.documentElement.classList.contains("dark"));
        document.documentElement.style.display = "block";
    }

    function toggleDarkMode() {
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        setDarkMode();
    }

    return <button ref={darkModeBtn} onClick={toggleDarkMode} className={`text-3xl fa-sun ${className}`}></button>;
}
