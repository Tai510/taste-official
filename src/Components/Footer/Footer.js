import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top-pattern"></div>

      <div className="footer-main">
        <div className="footer-logo-stamp">
          <img src="/images/taste-logo.png" alt="Taste of the Himalayas logo" />
        </div>

        <div className="footer-info-block">
          <h4>Taste of the Himalayas</h4>
          <p>464 1st St E Suite F</p>
          <p>Sonoma, CA 95476</p>
          <p className="footer-contact-line">
            <a href="tel:+17079961161">707-996-1161</a>
          </p>
          <p>
            <a href="mailto:himalayas.sonoma@gmail.com">
              himalayas.sonoma@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-hours-block">
          <h4>Hours</h4>
          <p>
            <strong>Lunch</strong>
            <span>Tues – Sun • 11:00 AM – 2:30 PM</span>
          </p>
          <p>
            <strong>Dinner</strong>
            <span>Mon – Sun • 5:00 PM – 9:00 PM</span>
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom-nav">
        <Link to="/">Home</Link>
        <Link to="/lunch-menu">Menu</Link>
        <Link to="/take-out">Take-Out</Link>
        <Link to="/contact">Contact</Link>

        <a
          href="https://www.google.com/maps/place/Taste+of+the+Himalayas/@38.292116,-122.456202"
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </a>

        <a
          href="https://www.facebook.com/pg/tasteofthehimalayassonoma/about/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>

      <div className="footer-copyright">
        <p>Established 2003 • Sonoma, California</p>
        <p>© {new Date().getFullYear()} Taste of the Himalayas</p>
      </div>
    </footer>
  );
};

export default Footer;