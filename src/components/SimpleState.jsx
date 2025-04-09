import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name === "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };
  const [num, setNum] = useState(0);
  const handleIncrease = () => {
    setNum(num + 1);
  };
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const details = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt
          deserunt, velit temporibus illo exercitationem magni eum aspernatur
          repellendus, facere non ducimus? Quasi ipsum tempore iste eos
          accusantium architecto saepe autem dolorum ea, officiis laborum
          soluta, earum at neque quaerat sequi voluptates tenetur aliquam
          voluptatum ex dolor, error nobis quod laboriosam!`;

  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
  };

  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold">UseState 1</h1>
      <p>My name is {name}</p>
      <button onClick={handleNameChange} className="mybtn">
        Change Name
      </button>
      <h1 className="my-5 text-5xl">{num}</h1>
      <button onClick={handleIncrease} className="mybtn">
        Increase
      </button>
      <button onClick={() => setNum(0)} className="mybtn">
        Reset
      </button>
      <button onClick={handleDecrease} className="mybtn">
        Decrease
      </button>
      <div className="max-w-[600px] mx-auto p-3 shadow-lg text-start">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid Demolished at the Emirates Stadium
        </h2>
        <p>{show ? details : ` ${details.substr(0, 100)}..........`}</p>
        <button onClick={handleShowDetails} className="mybtn">
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default SimpleState;
