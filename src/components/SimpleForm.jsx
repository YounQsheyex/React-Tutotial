import React from "react";
import { useState } from "react";

//while creating a form
//preventdefault , onclick and unSubmmit on the btn
//controlled input - set up state values for all input field
//value... the value would be passed to the inputs
//next would be the changing of the state value when the input is changed,... eventhandler
// preventdefault -on submit or onclick

const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setusers] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //function
    console.log(firstName, lastName);
    if (!firstName.trim() || !lastName.trim()) {
      //dusplay error message
      setError("please fill all fields");
      return;
    }
    setusers([...users, { firstName, lastName }]);
    console.log(users);
    setFirstName("");
    setLastName("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text2xl font-medium">Submit form</h1>
        <p className="text-red-400">{error}</p>
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
      {users.length > 0 && (
        <div className="myform">
          <h1>List of Users</h1>
          {users.map((user, index) => {
            return (
              <p key={index}>
                {user.firstName} {user.lastName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
