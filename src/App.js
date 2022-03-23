import React, { useState, useEffect } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]); //define our state in react hooks

  // console.log(countries);

  // const getCountries = () => {
  //   fetch("https://restcountries.com/v2/all")
  //     .then((response) => response.json())
  //     .then((data) => setCountries(data));
  // };

  // useEffect(() => {
  //   getCountries();
  // }, []);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      // console.log(response);
      setCountries(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Wrapper countries={countries} />
    </React.Fragment>
  );
}

export default App;
