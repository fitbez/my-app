import React, { useState, useEffect } from "react";
import { CountryProvider } from "./CountryContext";
import "./App.css";
import Wrapper from "./components/Wrapper";
import axios from "axios";

function App() {
  console.log(CountryProvider);
  return (
    <React.Fragment>
      <CountryProvider>
        <Wrapper />
      </CountryProvider>
    </React.Fragment>
  );
}

export default App;
