import React from "react";
import { useState } from "react";

//make sure you maintain the datatype
// spread out the values of the initial object {...initial, change:""}

const ComplexState = () => {
  const [user, setUser] = useState({
    fullname: "John Doe",
    age: 56,
    job: "Frontend Developer",
  });

  const handleChange = () => {
    setUser({ ...user, age: 60, job: "Backend Engineer" });
  };
  return (
    <div>
      <div className="w-[300px] rounded-md shadow-2xl p-1.5 mx-auto my-3">
        <h1 className="text-2xl">Employee Card</h1>
        <p>Name:{user.fullname}</p>
        <p>Job:{user.job}</p>
        <p>age:{user.age}</p>
        <button className="mybtn" onClick={handleChange}>
          Change
        </button>
      </div>
    </div>
  );
};

export default ComplexState;
