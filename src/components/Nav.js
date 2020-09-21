import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ThemeContext from "../Context/Context";

const Nav = ({ toggleTheme }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <nav className="row space-between">
      <ul className="navigation row">
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
      </ul>
      <button
        onClick={toggleTheme}
        className="btn-clear"
        style={{ fontSize: 30 }}
      >
        {theme === "light" ? "◼️ " : "💡"}
      </button>
    </nav>
  );
};

Nav.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Nav;
