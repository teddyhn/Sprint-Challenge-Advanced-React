import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeSlider = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
    <div
        onClick={toggleMode}
        className="dark-mode__toggle"  
    >
        <div className={darkMode ? 'toggle toggled' : 'toggle'} />
    </div>
    );
}

export default DarkModeSlider;