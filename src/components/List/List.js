import React from "react";

const List = () => {
  const navToDash = () => {
    console.log("back was clicked");
  };

  return (
    <div>
      <div>
        <div>div 1 (these will be components later)</div>
        <div>div 2</div>
        <div>div 3</div>
        <div onClick={navToDash}>Back to dash</div>
      </div>
    </div>
  );
};

export default List;
