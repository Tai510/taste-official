import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OurStory from "../OurStory/OurStory";
import FeaturedExperience from "../FeaturedExperience/FeaturedExperience";
import MenuPreview from "../MenuPreview/MenuPreview";

const HomeWrapper = styled.div`
  width: 100%;
  background: #fcedd5;
`;

const LandingSection = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 86px);
  min-height: 620px;
  max-height: 900px;
  overflow: hidden;
  background: #fcedd5;

  @media (max-width: 991px) {
    height: auto;
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
`;

const LandingImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  z-index: 1;

  @media (max-width: 991px) {
    object-fit: cover;
    object-position: center;
  }
`;

const HeroButtons = styled.div`
  position: absolute;
  z-index: 2;
  left: 4.8%;
  top: 61%;
  display: flex;
  align-items: center;
  gap: 18px;

  .primary-btn,
  .secondary-btn {
    min-width: 145px;
    height: 52px;
    padding: 0 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 800;
    text-decoration: none;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  .primary-btn {
    color: #ffffff;
    background: #e56600;
    border: 2px solid #e56600;
  }

  .primary-btn:hover {
    color: #ffffff;
    background: #cc5900;
    border-color: #cc5900;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(229, 102, 0, 0.2);
  }

  .secondary-btn {
    color: #102f63;
    background: rgba(255, 248, 236, 0.96);
    border: 2px solid #102f63;
  }

  .secondary-btn:hover {
    color: #ffffff;
    background: #102f63;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(16, 47, 99, 0.18);
  }

  @media (max-width: 991px) {
    left: 4.8%;
    top: 61%;
    gap: 12px;

    .primary-btn,
    .secondary-btn {
      min-width: 120px;
      height: 44px;
      padding: 0 18px;
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    gap: 8px;

    .primary-btn,
    .secondary-btn {
      min-width: 92px;
      height: 36px;
      padding: 0 12px;
      border-radius: 6px;
      font-size: 11px;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper id="home">
      <LandingSection>
        <LandingImage
          src="/images/himalayas-landing.png"
          alt="Taste of the Himalayas illustrated landing page"
        />

        <HeroButtons>
          <Link className="primary-btn" to="/dinner-menu">
            View Menu
          </Link>

          <Link className="secondary-btn" to="/about">
            Explore
          </Link>
        </HeroButtons>
      </LandingSection>

      <OurStory />
      <FeaturedExperience />
      <MenuPreview />
    </HomeWrapper>
  );
};

export default Home;