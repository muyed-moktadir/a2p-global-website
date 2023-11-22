// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <React.Fragment >
      <li className="ml-2 text-white text-xl">
        <NavLink to="/" >Home</NavLink>
      </li>
      <li className="ml-2 text-white text-xl">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="ml-2 text-white text-xl">
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <>
      <div className="navbar flex justify-around bg-stone-900 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost bg-slate-200 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
            >
             {menuItem}
            </ul>
          </div>

          <div className="avatar">
            <div className="w-10 mask mask-hexagon mr-5">
              <img src="../../../../../src/assets/logo.png" />
            </div>
          </div>
          <Link className=" text-3xl text-white ">A2P Global</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuItem}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
