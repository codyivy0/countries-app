import { useTheme } from "../../ThemeContext.jsx";
import styles from "./Header.module.css";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={`${styles.header} ${darkMode ? "dark-mode" : ""}`}>
      <h2>Where in the world?</h2>

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
