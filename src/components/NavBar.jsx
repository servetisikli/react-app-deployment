import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const activeHandler = ({ isActive }) =>
    isActive ? "first-class" : "second-class";
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={activeHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" end className={activeHandler}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts/create-post" className={activeHandler}>
            Create Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/authentication/login" className={activeHandler}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/authentication/register" className={activeHandler}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
