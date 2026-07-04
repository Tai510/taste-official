import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setMenuOpen(true);
  };

  const scheduleCloseMenu = () => {
    clearCloseTimer();

    closeTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 220);
  };

  const toggleMenu = () => {
    clearCloseTimer();
    setMenuOpen((open) => !open);
  };

  const closeAll = () => {
    clearCloseTimer();
    setMobileOpen(false);
    setMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    clearCloseTimer();
    setMobileOpen((open) => !open);
    setMenuOpen(false);
  };

  return (
    <header className="navbar-main">
      <nav className="taste-navbar">
        <Link to="/" className="taste-brand" onClick={closeAll}>
          <img src="/images/taste-logo.png" alt="Taste of the Himalayas logo" />
        </Link>

        <button
          type="button"
          className="taste-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
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
          </span>
        </button>

        <div className={`taste-links ${mobileOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAll}>
            Home
          </Link>

          <div
            className="menu-link-wrap"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              className="menu-trigger"
              onClick={toggleMenu}
              onMouseEnter={openMenu}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              Menu
            </button>

            <div
              className={`menu-dropdown ${menuOpen ? "show" : ""}`}
              onMouseEnter={openMenu}
              onMouseLeave={scheduleCloseMenu}
            >
              <Link to="/lunch-menu" onClick={closeAll}>
                Lunch Menu
              </Link>

              <Link to="/dinner-menu" onClick={closeAll}>
                Dinner Menu
              </Link>

              <Link to="/wine-list" onClick={closeAll}>
                Wine List
              </Link>
            </div>
          </div>

          <Link to="/take-out" onClick={closeAll}>
            Take-Out
          </Link>

          <Link to="/contact" onClick={closeAll}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
