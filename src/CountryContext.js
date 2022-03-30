import React, { useState, createContext } from "react";

export const CountryContext = createContext();

// console.log(CountryContext);

export function CountryProvider(props) {
  const [countries, setCountries] = useState([
    {
      name: "Ethiopia",
      population: "120,000,000",
      capital: "Addis Ababa",
      flag: "./pic-two.jpg",
    },
    {
      name: "Kenya",
      population: "120,000,000",
      capital: "Nirobi",
      flag: "./pic-two.jpg",
    },
    {
      name: "Eritira",
      population: "120,000,000",
      capital: "Asmara",
      flag: "./pic-two.jpg",
    },
    {
      name: "Somalia",
      population: "120,000,000",
      capital: "Mokadisho",
      flag: "./pic-two.jpg",
    },
  ]); //define our state in react hooks

  return (
    <CountryContext.Provider value={{ countries }}>
      {props.children}
    </CountryContext.Provider>
  );
}

export default CountryContext;
