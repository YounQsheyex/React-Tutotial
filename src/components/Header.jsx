import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-[80px] container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Store">Store</Link>
          <Link to="/login" className="btn btn-accent">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
