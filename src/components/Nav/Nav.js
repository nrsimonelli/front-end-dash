import React from "react";

const Nav = () => {
  const navToHome = () => {
    console.log("nav was clicked");
  };

  return (
    <div>
      <div>this is nav</div>
      <div onClick={navToHome}>logo here (click test)</div>
    </div>
  );
};

export default Nav;
