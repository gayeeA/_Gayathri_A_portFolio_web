import "./Navbar.css";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h1>Gayathri_Ande</h1>{" "}
      </Link>
      <ul className="Nav-menu">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/Project">Project</Link>
        </li>
        <li>
          {" "}
          <Link to="/About">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
