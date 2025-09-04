import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "./../../assets/assets";

const NavBar = () => {
  const [user, setUser] = useState(false);
  const ulItems = (
    <>
      <li >
        <NavLink className="btn outline-none hover:btn-primary  " to="/">HOME</NavLink>
      </li>
      <li >
        <NavLink className="btn outline-none hover:btn-primary  " to="/about">ABOUT</NavLink>
      </li>
      <li >
        <NavLink className="btn outline-none hover:btn-primary  " to="/alldoctors"> ALL DOCOTROS </NavLink>
      </li>
      <li >
        <NavLink className="btn outline-none hover:btn-primary  " to="/contact"> CONTACT </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {ulItems}
            {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <NavLink to="/">
          {" "}
          <img src={assets.logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {ulItems}
          {/* <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
        </ul>
      </div>
      <div className="navbar-end pr-3 transition-all delay-500">
        {user === false ? (
          <h1 onClick={() => setUser(true)}>Create Account</h1>
        ) : (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="px-4 m-1">
              <img
                className="w-8 h-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a onClick={() => setUser(false)}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
