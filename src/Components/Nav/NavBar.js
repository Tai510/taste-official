import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-main">
      <Navbar expand="lg" className="taste-navbar">
        <Navbar.Brand as={Link} to="/" className="taste-brand">
          <img
            src="/images/taste-logo.png"
            alt="Taste of the Himalayas logo"
          />

          <span>Taste of the Himalayas</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="taste-navbar-nav" />

        <Navbar.Collapse id="taste-navbar-nav">
          <Nav className="ml-auto taste-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Menu" id="taste-menu-dropdown">
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
    </div>
  );
};

export default NavBar;