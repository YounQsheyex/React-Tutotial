import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text2xl font-medium">Submit form</h1>
        <input
          type="text"
          placeholder="First Name"
          className="myInput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myInput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="Submit" className="mybtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
