import React from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(false);
  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };

  return (
    <>
      {!user ? (
        <div>
          <h1>Not logged in</h1>
          <button onClick={login} className="mybtn">
            Log In
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to your Dashboard</h1>
          <button onClick={logout} className="mybtn">
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default User;
