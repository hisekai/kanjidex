import React from "react";
import { NavLink } from "react-router-dom";
import { HelpCircle, Info, Book, Home } from "react-feather";
import styled from "styled-components";
import { Colors } from "../../helpers/theme";
import Logo from "../../assets/logo.png";

const StyledNavbar = styled.nav`
  align-items: center;
  .navbar-item {
    display: block;
    margin: auto;
  }
  .navbar-item img {
    max-height: 3.75rem;
  }
  .navbar-menu {
    display: block;
    text-align: center;
    box-shadow: none;
  }
  .navbar-menu .navbar-item {
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
  }
  .navbar-item.active {
    color: ${Colors.dimWhite};
  }
  .navbar-item.active {
    background-color: transparent;
    color: ${Colors.main};
  }
  .navbar-item:hover {
    background-color: transparent;
    color: ${Colors.main};
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="column is-half is-offset-one-quarter">
        <div className="navbar-brand">
          <a className="navbar-item" href="/kanjidex">
            <img src={Logo} alt="Kanjidex Logo" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start is-flex-touch">
            <NavLink
              exact
              to="kanjidex"
              activeClassName="active"
              className="navbar-item"
            >
              {" "}
              <Home /> Home
            </NavLink>

            <NavLink
              to="/kanjidex/vocabulary"
              activeClassName="active"
              className="navbar-item"
            >
              {" "}
              <span>
                <Book />
              </span>{" "}
              Vocabulary
            </NavLink>
            <NavLink
              to="/kanjidex/help"
              activeClassName="active"
              className="navbar-item"
            >
              <span>
                <HelpCircle />
              </span>{" "}
              Help
            </NavLink>
            <NavLink
              to="/kanjidex/about"
              activeClassName="active"
              className="navbar-item"
            >
              <span>
                <Info />
              </span>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
