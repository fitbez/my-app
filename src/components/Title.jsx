import React from "react";
import "./Style.css";

function Title() {
  return (
    <h1 className="title" style={styleTitle}>
      Friends List
    </h1>
  );
}

const styleTitle = {
  textAlign: "center",
};

export default Title;
