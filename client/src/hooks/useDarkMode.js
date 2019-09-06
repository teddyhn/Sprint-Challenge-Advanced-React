import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [darkMode])

    return [darkMode, setDarkMode];
}