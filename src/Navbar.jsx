import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact-US</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default Navbar;
