import { useTheme } from "../../ThemeContext";
import styles from "./FlagsList.module.css";
import PropTypes from "prop-types";

const FlagsList = ({ countryData }) => {
  const { darkMode } = useTheme();

  function formatPopulationWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.flagsListContainer}>
      {countryData.map((country, index) => (
        <div
          className={`${styles.countryCard} ${darkMode ? styles.cardDark : ""}`}
          key={index}
        >
          <img src={country.flags.svg} alt="" />
          
          <div
            className={`${styles.countryInfo} ${
              darkMode ? styles.cardDark : ""
            } `}
          >
            <h3>{country.name}</h3>
            <p>
              <span className={styles.bold}>Population:</span>{" "}
              {formatPopulationWithCommas(country.population)}
            </p>
            <p>
              <span className={styles.bold}>Region:</span> {country.region}
            </p>
            <p>
              <span className={styles.bold}>Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

FlagsList.propTypes = {
  countryData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // Add other required properties here
    })
  ).isRequired,
};

export default FlagsList;
