import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import FlagsList from "./components/FlagsList/FlagsList";
import countryData from './data.json'

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <FlagsList countryData={countryData}/>
      </ThemeProvider>
    </>
  );
}

export default App;
