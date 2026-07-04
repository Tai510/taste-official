import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const history = useHistory();
  const location = useLocation();

  const closeAll = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setMobileOpen(false);
    setMenuOpen(false);
  };

  const openMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setMenuOpen(true);
  };

  const closeMenuSoon = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 220);
  };

  const scrollToOurStory = () => {
    const ourStory = document.getElementById("our-story");

    if (!ourStory) {
      return;
    }

    ourStory.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleExplore = (event) => {
    event.preventDefault();
    closeAll();

    if (location.pathname === "/") {
      scrollToOurStory();
      return;
    }

    history.push("/");

    setTimeout(() => {
      scrollToOurStory();
    }, 180);
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
          onClick={() => {
            setMobileOpen((open) => !open);
            setMenuOpen(false);
          }}
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
            onMouseLeave={closeMenuSoon}
          >
            <button
              type="button"
              className="menu-trigger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
            >
              Menu
            </button>

            <div className={`menu-dropdown ${menuOpen ? "show" : ""}`}>
              <Link to="/lunch-menu" onClick={closeAll}>
                Lunch Menu
              </Link>

              <Link to="/dinner-menu" onClick={closeAll}>
                Dinner Menu
              </Link>

              <Link to="/take-out" onClick={closeAll}>
                To-Go Menu
              </Link>

              <Link to="/wine-list" onClick={closeAll}>
                Wine List
              </Link>
            </div>
          </div>

          <a href="/#our-story" onClick={handleExplore}>
            Explore
          </a>

          <Link to="/contact" onClick={closeAll}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;