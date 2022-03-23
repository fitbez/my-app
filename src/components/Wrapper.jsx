import React from "react";
import FriendCard from "./FriendCard";
import Title from "./Title";

function Wrapper(props) {
  // console.log(props);
  return (
    <div style={styleWrapper}>
      <Title />
      <div>
        <FriendCard countries={props.countries} />
      </div>
    </div>
  );
}

const styleWrapper = {
  display: "flex",
  flexDirection: "column",
};

export default Wrapper;
