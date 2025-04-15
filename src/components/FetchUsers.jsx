import React from "react";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { GridLoader } from "react-spinners";


const url = "https://dummyjson.com/users";
// firstName
// lastName
// image
// Gender
// address(adress,city,state)
const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getusers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.users);
      setUsers(data.users);
    };
    getusers();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        <GridLoader color="#ff0000" />
      </div>
    );
  }

  return (
    <div className="max-w-[1241px] mx-auto p-10">
      <h1 className="text-center font-extrabold text-6xl mb-20">Users</h1>
      <section className="flex flex-wrap gap-2.5 items-center">
        {users.map((user, index) => {
          const { firstName, lastName, image, gender, address } = user;
          return (
            <div
              key={index}
              className="w-full max-w-[320px] h-[320px] shadow-xl px-2.5 rounded-lg"
            >
              <img
                src={image}
                alt={firstName}
                className="w-full object-cover h-[150px]"
              />
              <div className="flex flex-col gap-2.5">
                <h1 className="text-lg font-bold">
                  {firstName} {lastName}
                </h1>
                <p className="text-sm my-2 capitalize">{gender}</p>
                <p className="text-sm">{address.address}</p>
                <p className="text-sm">{address.city}</p>
                <p className="text-sm">{address.state}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUsers;
