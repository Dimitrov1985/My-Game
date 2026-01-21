import './ThemeToggle.css';
import{FaSun, FaMoon} from 'react-icons/fa';
import { useState, useEffect, use } from 'react';
const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    
    
    useEffect(() => {
        const saveTheme = localStorage.getItem("save-theme");
        if (saveTheme) {
            setTheme(saveTheme)
            document.body.classList.toggle("dark-theme" , saveTheme === "dark");
        }
    }, [theme])
        const toggleTheme = () => {
           const newTheme = theme === "light" ? "dark" : "light"; 
           setTheme(newTheme);
           document.body.classList.toggle("dark-theme" , newTheme === "dark");
           localStorage.setItem("save-theme" , newTheme);

        }
  return (
    
         <div className="them-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaSun /> : <FaMoon />}
        </div>

  )
}

export default ThemeToggle
