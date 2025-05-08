import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const DashboradLayout = () => {
  return (
    <div>
      <section className="flex h-screen">
        {/* side bar */}
        <div className="w-[20%] bg-gray-400 p-2">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl my-3">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "rounded-md bg-accent" : ""
              }
              end
            >
              Home
            </NavLink>
            
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "rounded-md bg-accent" : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "rounded-md bg-accent" : ""
              }
            >
              Spam
            </NavLink>
          </nav>
        </div>
        {/* outlet */}
        <div className="w-[80%] p-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboradLayout;
