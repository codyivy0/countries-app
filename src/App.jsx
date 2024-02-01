import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlagsList from "./components/FlagsList/FlagsList";
import countryData from "./data.json";
import CountryDetails from "./components/CountryDetails/CountryDetails";


function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
        
            <Route
              exact
              path="/"
              element={<FlagsList countryData={countryData} />}
            />
            <Route
              path="/country/:alpha3Code"
              element={<CountryDetails countryData={countryData} />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
