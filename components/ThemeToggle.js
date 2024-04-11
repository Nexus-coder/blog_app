import React, { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css"; // Import the CSS file below

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the 'dark-mode' class on the body element
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={styles.themeSwitchWrapper}>
      <label className={styles.themeSwitch} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
        <div className={`${styles.slider} ${styles.round}`}></div>
      </label>
    </div>
  );
}

export default ThemeToggle;
