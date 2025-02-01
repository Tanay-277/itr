import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? (savedTheme as "dark" | "light") : "dark";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.classList.remove(theme === "dark" ? "light" : "dark");
        document.body.classList.add(theme);
    }, [theme]);

    return { theme, toggleTheme };
}