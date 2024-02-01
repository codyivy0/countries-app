import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import styles from "./FlagsList.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const FlagsList = ({ countryData }) => {
  const { darkMode } = useTheme();
  const [userInput, setUserInput] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region"); // Default to 'All' regions

  const regions = [
    "Filter by Region",
    "Asia",
    "Europe",
    "Africa",
    "Americas",
    "Oceania",
  ];

  const filteredCountries = countryData
    .filter((country) =>
      country.name.toLowerCase().includes(userInput.toLowerCase())
    )
    .filter((country) =>
      selectedRegion === "Filter by Region"
        ? true
        : country.region === selectedRegion
    );

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  function formatPopulationWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  console.log(countryData);
  return (
    <>
      <Header />
      <section className={styles.controls}>
        <input
          type="text"
          className={`${styles.filterInput} ${darkMode ? styles.darkMode : ""}`}
          placeholder="Search for a country..."
          value={userInput}
          onChange={handleChange}
        />
        <div className={styles.dropdownContainer}>
          <select
            id="regionDropdown"
            className={`${styles.dropdown} ${darkMode ? styles.darkMode : ""}`}
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className={styles.flagsListContainer}>
        {filteredCountries.map((country, index) => (
          <Link
            className={`${styles.link} ${darkMode ? styles.darkMode : ""}`}
            to={`/country/${country.alpha3Code}`}
            key={index}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`${styles.countryCard} ${
                darkMode ? styles.cardDark : ""
              }`}
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
                  <span className={styles.bold}>Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
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
