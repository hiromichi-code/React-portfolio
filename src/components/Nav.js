import { FilterNoneTwoTone } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="l-nav">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        </li>
        <li>
          <Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
        </li>
        <li>
          <Link to="/Portfolio" style={{ textDecoration: 'none', color: 'black' }}>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
