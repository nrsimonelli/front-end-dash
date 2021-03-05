import React from "react";

const Dash = () => {
  const navToList = () => {
    console.log("list was clicked");
  };

  return (
    <div>
      <div>
        <div>div 1 (these will be components later)</div>
        <div onClick={navToList}>div 2 (go to list example)</div>
        <div>div 3</div>
        <div>div 4</div>
      </div>
    </div>
  );
};

export default Dash;
