import React from "react";

const EventHandling = () => {
  const handleClick = () => {
    alert("Welcome User");
  };
  const handleClickAgain = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl ">RESPONDING TO USER INTERACTION</h1>
      <button onClick={handleClick} className="mybtn">
        Click Me
      </button>
      <button onClick={() => handleClickAgain("John")} className="mybtn">
        Click Again
      </button>
    </div>
  );
};

export default EventHandling;
