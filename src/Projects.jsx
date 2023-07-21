import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2>Inside Projects</h2>
      <nav>
        <NavLink to={"projectsa"}>ProjectsA</NavLink>
        <NavLink to={"projectsb"}>ProjectsB</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Projects;
