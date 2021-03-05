import React from "react";

const List = () => {
  const navToDash = () => {
    console.log("back was clicked");
  };

  return (
    <div>
      <div>
        <div>Table 1</div>
        <div onClick={navToDash}>Back to dash</div>
      </div>
    </div>
  );
};

export default List;
