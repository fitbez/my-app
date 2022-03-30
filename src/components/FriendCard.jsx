import React, { useState, useContext } from "react";
import { CountryContext } from "../CountryContext";
import "./Style.css";

function FriendCard() {
  console.log("hello", CountryContext);
  const { countries } = useContext(CountryContext);

  // console.log(countries);

  return (
    <div>
      {countries.map((country) => {
        return (
          <ul>
            <li>{country.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default FriendCard;
