import React, { useState } from "react";
import "./Style.css";

function FriendCard(props) {
  const [countryName, setCountryName] = useState("");

  const handleSearch = (e) => {
    setCountryName(e.target.value);
  };

  const handleCountry = (name) => {
    setCountryName(name);
    // console.log("clicked");
  };

  // console.log(countryName);

  const countryToShow = props.countries.filter((country) => {
    return country.name.toUpperCase().indexOf(countryName.toUpperCase()) > -1;
  });

  // console.log("country", props.countries);
  console.log("country to show", countryToShow);

  return (
    <div>
      <label>Search for a country by name</label>
      <input type="text" onChange={handleSearch} />
      {countryToShow.length >= 250 ? (
        <p>Please enter a country to know about...</p>
      ) : countryToShow.length >= 20 ? (
        <p>Too many matches, specify another filter</p>
      ) : countryToShow.length <= 5 && countryToShow.length > 1 ? (
        <div>
          {countryToShow.map((c) => {
            return (
              <ul>
                <li onClick={() => handleCountry(c.name)}>{c.name}</li>
              </ul>
            );
          })}
        </div>
      ) : countryToShow.length === 1 ? (
        <div style={styleItem}>
          {countryToShow.map((country) => {
            return (
              <React.Fragment>
                <div style={styleFriendCard}>
                  <img style={styleImage} src={country.flag} alt="pic one" />
                  <div className="content">
                    <p>
                      <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                      {country.name}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Population:</span>{" "}
                      {country.population}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>capital:</span>{" "}
                      {country.capital}
                    </p>
                  </div>
                </div>
                ;
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const styleFriendCard = {
  width: "200px",
  height: "350px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  margin: "20px 40px 40px",
};

const styleImage = {
  width: "200px",
  height: "200px",
};

const styleItem = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

export default FriendCard;
