import React, { useState } from "react";
//using one state value to handle all input

const MultipleForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    age: "",
  });
  const [error, setErrors] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, age } = user;
    if (!fullName.trim() || !email.trim() || !age.trim()) {
      setErrors("Please fill all fields");
      return;
    }
    // do what you want to do
    console.log(user);
    setErrors("");
    setUser({
      fullName: "",
      email: "",
      age: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="myform">
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          className="myInput"
          placeholder="Full Name"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="myInput"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="myInput"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button className="mybtn">Submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;
