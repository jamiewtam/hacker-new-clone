import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <ul className="navigation">
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="navigation__active-link"
          className="navigation-link"
        >
          Top
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new"
          activeClassName="navigation__active-link"
          className="navigation-link"
        >
          New
        </NavLink>
      </li>
      <li></li>
    </ul>
  );
};

export default Nav;
