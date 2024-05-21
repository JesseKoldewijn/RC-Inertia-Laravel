import { useEffect, useLayoutEffect, useState } from "react";

interface ThemeToggleProps {
    initialTheme?: string;
}

const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
    const [theme, setTheme] = useState(initialTheme || "dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        const oldTheme = theme === "dark" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.remove(oldTheme);
        document.documentElement.classList.add(newTheme);
        const newThemeCookie = `lara-theme=${newTheme};path=/;max-age=31536000`;
        document.cookie = newThemeCookie;
    };

    useEffect(() => {
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(theme);
    }, [theme]);

    useLayoutEffect(() => {
        const docRoot = document.documentElement;
        const savedTheme = docRoot.classList.contains("light")
            ? "light"
            : "dark";

        setTheme(savedTheme);
    }, []);

    return (
        <div className="relative">
            <div>
                <span className="inline-flex rounded-md">
                    <button
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <MoonIcon /> : <SunIcon />}
                        <span className="sr-only">
                            {`toggle to show the app in ${theme === "light" ? "Dark" : "Light"} mode`}
                        </span>
                    </button>
                </span>
            </div>
        </div>
    );
};
export default ThemeToggle;

const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun"
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon"
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);
