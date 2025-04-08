import React from "react";

const SimpleList = () => {
  const customers = ["Ade", "Jane", "John", "Peter"];
  const users = ["Dayo", "Bose", "Tobi", "Dami", "Bayo"];
  return (
    <div>
      <h1>Outputting Lists in React</h1>
      <div>
        {customers.map((customer, index) => {
          return <p key={index}>{customer}</p>;
        })}
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <h1 key={index} className="text-green-700 font-bold uppercase">
              {user}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleList;
