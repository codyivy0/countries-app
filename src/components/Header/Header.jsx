import { useTheme } from "../../ThemeContext.jsx";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={`${styles.header} ${darkMode ? styles.darkMode : ""}`}>
      <Link
        to="/"
        className={`${styles.link} ${darkMode ? styles.darkMode : ""}`}
      >
        <h2 className={darkMode ? styles.darkMode : ""}>Where in the world?</h2>
      </Link>

      <div
        className={`${styles.themeSwitch} ${darkMode ? "switch-dark" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode && (
          <img
            className={styles.icon}
            src="/theme-switcher-dark.svg"
            alt="dark/light mode switch"
          />
        )}
        {!darkMode && (
          <img
            className={styles.icon}
            src="/theme-switcher.svg"
            alt="dark/light mode switch"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
