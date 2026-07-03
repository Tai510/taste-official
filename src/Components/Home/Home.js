import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OurStory from "../OurStory/OurStory";
import FeaturedExperience from "../FeaturedExperience/FeaturedExperience";
import MenuPreview from "../MenuPreview/MenuPreview";

const HomePage = styled.section`
  min-height: 88vh;
  width: 100%;

  background:
    linear-gradient(
      90deg,
      rgba(18, 12, 8, 0.82) 0%,
      rgba(18, 12, 8, 0.62) 42%,
      rgba(18, 12, 8, 0.2) 100%
    ),
    url("/images/spices.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  padding: 120px 7% 70px;
  color: white;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 720px;
  text-align: left;

  .eyebrow {
    color: #f5c76a;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  h1 {
    font-family: Georgia, serif;
    font-size: clamp(48px, 7vw, 92px);
    font-weight: 800;
    line-height: 0.95;
    margin-bottom: 24px;
    text-shadow:
      0 4px 18px rgba(0, 0, 0, 0.65),
      0 1px 2px rgba(0, 0, 0, 0.8);
  }

  .hero-description {
    max-width: 650px;
    margin: 0 0 34px;
    font-size: 19px;
    line-height: 1.7;
    color: #f6ead7;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .primary-btn,
  .secondary-btn {
    padding: 15px 28px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-decoration: none;
  }

  .primary-btn {
    background: #9f2b1d;
    color: white;
  }

  .secondary-btn {
    background: rgba(255, 248, 236, 0.94);
    color: #7b1e16;
  }

  .restaurant-info {
    margin-top: 36px;
    font-size: 14px;
    line-height: 1.7;
    color: #f6ead7;
  }

  .restaurant-info a {
    color: #f6ead7;
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    text-align: center;

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      justify-content: center;
    }
  }
`;

const Home = () => {
  return (
    <div id="home">
      <HomePage>
        <HeroContent>
          <div className="eyebrow">
            Sonoma, California • Established 2003
          </div>

          <h1>Taste of the Himalayas</h1>

          <p className="hero-description">
            Traditional Nepalese, Tibetan, and Indian dishes served with warmth,
            spice, and the spirit of the Himalayas in the heart of Sonoma.
          </p>

          <div className="hero-buttons">
            <Link className="primary-btn" to="/dinner-menu">
              Explore Our Menu
            </Link>

            <Link className="secondary-btn" to="/contact">
              Visit Us
            </Link>
          </div>

          <div className="restaurant-info">
            464 1st St E Suite F, Sonoma, CA 95476 |{" "}
            <a href="tel:+17079961161">707-996-1161</a> |{" "}
            <Link to="/contact">Contact Us</Link>
          </div>
        </HeroContent>
      </HomePage>

      <OurStory />
      <FeaturedExperience />
      <MenuPreview />
    </div>
  );
};

export default Home;