import React from "react";
import FriendCard from "./FriendCard";
import Title from "./Title";

function Wrapper() {
  // console.log(props);
  return (
    <div style={styleWrapper}>
      <Title />
      <div>
        <FriendCard />
      </div>
    </div>
  );
}

const styleWrapper = {
  display: "flex",
  flexDirection: "column",
};

export default Wrapper;
