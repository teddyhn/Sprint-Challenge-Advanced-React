import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
    <div
        onClick={toggleMode}
        className="dark-mode__toggle"
        data-testid="dark-mode-toggler" 
    >
        <div 
            className={darkMode ? 'toggle toggled' : 'toggle'}
            data-testid="dark-mode-toggle"
        />
    </div>
    );
}

export default DarkModeToggle;