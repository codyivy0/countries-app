import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import styles from "./FlagsList.module.css";
import PropTypes from "prop-types";

const FlagsList = ({ countryData }) => {
  const { darkMode } = useTheme();

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region"); // Default to 'All' regions

  const regions = [
    "Filter by Region",
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Americas",
    "Oceania",
  ];

  const filteredCountries =
    selectedRegion === "All" || selectedRegion === "Filter by Region"
      ? countryData
      : countryData.filter((country) => country.region === selectedRegion);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  function formatPopulationWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      {" "}
      <section className={styles.controls}>
        <input type="text" className={styles.filterInput} placeholder="this doesnt work yet" />
        <div className={styles.dropdownContainer}>
          <select
            id="regionDropdown"
            className={styles.dropdown}
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
          <div
            className={`${styles.countryCard} ${
              darkMode ? styles.cardDark : ""
            }`}
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
