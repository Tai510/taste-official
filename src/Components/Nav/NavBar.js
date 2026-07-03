import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header className="navbar-main">
      <Navbar expand="lg" className="taste-navbar">
        <Navbar.Brand as={Link} to="/" className="taste-brand">
          <img src="/images/taste-logo.png" alt="Taste of the Himalayas logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="taste-navbar-nav"
          className="taste-toggle"
        >
          <span className="prayer-hamburger" aria-hidden="true">
            <span className="prayer-row prayer-row-one">
              <span className="prayer-rope" />
              <span className="prayer-flag flag-red" />
              <span className="prayer-flag flag-yellow" />
              <span className="prayer-flag flag-blue" />
              <span className="prayer-flag flag-green" />
              <span className="prayer-flag flag-orange" />
            </span>

            <span className="prayer-row prayer-row-two">
              <span className="prayer-rope" />
              <span className="prayer-flag flag-blue" />
              <span className="prayer-flag flag-green" />
              <span className="prayer-flag flag-red" />
              <span className="prayer-flag flag-yellow" />
              <span className="prayer-flag flag-blue" />
            </span>

            <span className="prayer-row prayer-row-three">
              <span className="prayer-rope" />
              <span className="prayer-flag flag-yellow" />
              <span className="prayer-flag flag-red" />
              <span className="prayer-flag flag-green" />
              <span className="prayer-flag flag-blue" />
              <span className="prayer-flag flag-orange" />
            </span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="taste-navbar-nav">
          <Nav className="taste-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown
              title="Menu"
              id="taste-menu-dropdown"
              className="taste-dropdown"
            >
              <NavDropdown.Item as={Link} to="/lunch-menu">
                Lunch Menu
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/dinner-menu">
                Dinner Menu
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/wine-list">
                Wine List
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/take-out">
              Take-Out
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
