import React from "react";
import { Link } from "react-router-dom";
import "./MenuPreview.css";

const MenuPreview = () => {
  return (
    <section className="menu-preview-section">
      <div className="menu-preview-accent"></div>

      <div className="menu-preview-wrap">
        <div className="menu-preview-copy">
          <p className="menu-preview-kicker">From Our Kitchen</p>

          <h2>Flavors From the Himalayas</h2>

          <p className="menu-preview-description">
            Explore comforting curries, sizzling tandoori dishes, handmade
            favorites, fresh naan, vegetarian specialties, and bold flavors
            inspired by Nepal, Tibet, and India.
          </p>
        </div>

        <div className="menu-preview-side">
          <p className="menu-side-label">Explore</p>

          <div className="menu-preview-links">
            <Link to="/lunch-menu">
              <span>01</span>
              Lunch Menu
              <strong>→</strong>
            </Link>

            <Link to="/dinner-menu">
              <span>02</span>
              Dinner Menu
              <strong>→</strong>
            </Link>

            <Link to="/take-out">
              <span>03</span>
              To-Go Menu
              <strong>→</strong>
            </Link>

            <Link to="/wine-list">
              <span>04</span>
              Wine List
              <strong>→</strong>
            </Link>
          </div>

          <div className="menu-since-note">
            <span>Sonoma</span>
            <strong>Serving since 2003</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
