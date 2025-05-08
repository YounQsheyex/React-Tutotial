import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-[80px] container">
        <div>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? "underline bg-grey-400" : "")}
          >
            Home
          </NavLink>
        </div>
        <div className="flex gap-5 items-center">
          <NavLink
            to="/About"
            className={({isActive}) => (isActive ? "underline bg-grey-400" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({isActive}) => (isActive ? "underline bg-accent" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/Store"
            className={({isActive}) => (isActive ? "underline bg-accent" : "")}
          >
            Store
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({isActive}) => (isActive ? "underline bg-accent" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/login"
            className={({isActive}) =>
              isActive ? "underline" : "btn btn-accent"
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
