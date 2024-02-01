import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

import styles from "./CountryDetails.module.css";
import Header from "../Header/Header";

const CountryDetails = ({ countryData }) => {
  const { alpha3Code } = useParams();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const country = countryData.find(
    (country) => country.alpha3Code === alpha3Code
  );

  if (!country) {
    return <h1>Country not Found </h1>;
  }

  function formatPopulationWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  console.log(country);

  return (
    <>
    <Header />
      <section className={styles.detailsContainer}>
        <button
          className={`${styles.backBtn} ${darkMode ? styles.darkBtn : ""}`}
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        <img src={country.flag} alt="" />
        <h2>{country.name}</h2>

        <div className={styles.detailsGroup1}>
          <p>
            <span className={styles.bold}>Native Name: </span>
            {country.nativeName}
          </p>
          <p>
            <span className={styles.bold}>Population: </span>
            {formatPopulationWithCommas(country.population)}
          </p>
          <p>
            <span className={styles.bold}>Region: </span>
            {country.region}
          </p>
          <p>
            <span className={styles.bold}>Sub Region:</span> {country.subregion}
          </p>
          <p>
            <span className={styles.bold}>Capital:</span> {country.capital}
          </p>
        </div>

        <div className={styles.detailsGroup2}>
          <p>
            <span className={styles.bold}>Top Level Domain:</span>{" "}
            {country.topLevelDomain}
          </p>
          <p>
            <span className={styles.bold}>Currency:</span>{" "}
            {country.currencies[0].name}
          </p>
          <p>
            <span className={styles.bold}>Languages:</span>{" "}
            {country.languages.map((lang) => lang.name).join(", ")}
          </p>
        </div>

        <div className={styles.detailsGroup3}>
          <p>
            <span className={styles.bold}>Border Countries:</span>
          </p>
          <div className={styles.borderBtns}>
            {country.borders &&
              country.borders.length > 0 &&
              country.borders.map((country) => (
                <Link
                  to={`/country/${country}`}
                  key={country}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button
                    className={`${styles.borderBtn} ${
                      darkMode ? styles.darkBtn : ""
                    }`}
                  >
                    {country}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

CountryDetails.propTypes = {
  countryData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // Add other required properties here
    })
  ).isRequired,
};

export default CountryDetails;
