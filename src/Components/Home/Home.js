import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
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
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
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

const HistoricMenuSection = styled.section`
  position: relative;
  padding: 90px 18px 105px;
  overflow: hidden;
  background: radial-gradient(
      circle at top,
      rgba(229, 102, 0, 0.18),
      transparent 32%
    ),
    linear-gradient(180deg, #fcedd5 0%, #fff7e8 48%, #f4dfbf 100%);
`;

const HistoricInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 34px;
    text-align: center;
  }
`;

const HistoricCopy = styled.div`
  position: relative;
  z-index: 2;

  .eyebrow {
    margin-bottom: 12px;
    color: #e56600;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 18px;
    color: #102f63;
    font-size: clamp(34px, 5vw, 62px);
    line-height: 0.95;
    font-weight: 950;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 520px;
    margin: 0 0 28px;
    color: #4e3520;
    font-size: 18px;
    line-height: 1.7;
  }

  @media (max-width: 920px) {
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const MenuStage = styled.div`
  position: relative;
  perspective: 1400px;
`;

const MenuCard = styled.div`
  position: relative;
  max-width: 540px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 28px;
  background: rgba(10, 25, 49, 0.96);
  box-shadow: 0 28px 65px rgba(16, 47, 99, 0.28),
    0 0 34px rgba(229, 102, 0, 0.23);
  transform-origin: left center;
  transition: transform 0.8s ease, opacity 0.6s ease, filter 0.6s ease;

  ${({ $flipping }) =>
    $flipping &&
    `
      transform: rotateY(-78deg) scale(0.96);
      opacity: 0.35;
      filter: blur(2px);
    `}

  img {
    width: 100%;
    display: block;
    border-radius: 18px;
  }

  .historical-note {
    margin: 14px 8px 0;
    color: rgba(255, 248, 236, 0.72);
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
  }
`;

const MenuActions = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CtaButton = styled.button`
  border: none;
  cursor: pointer;
  min-width: 210px;
  height: 54px;
  padding: 0 26px;
  border-radius: 999px;
  color: #ffffff;
  background: #e56600;
  font-size: 15px;
  font-weight: 900;
  box-shadow: 0 12px 28px rgba(229, 102, 0, 0.26);
  transition: all 0.2s ease;

  &:hover {
    background: #cc5900;
    transform: translateY(-2px);
  }
`;

const Chooser = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  animation: riseIn 0.28s ease both;

  button {
    border: 2px solid #102f63;
    cursor: pointer;
    min-width: 130px;
    height: 46px;
    padding: 0 18px;
    border-radius: 999px;
    color: #102f63;
    background: rgba(255, 248, 236, 0.95);
    font-size: 14px;
    font-weight: 850;
    transition: all 0.2s ease;
  }

  button:hover {
    color: #ffffff;
    background: #102f63;
    transform: translateY(-2px);
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HistoricMenuExperience = () => {
  const [chooserOpen, setChooserOpen] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const history = useHistory();

  const goToMenu = (path) => {
    setFlipping(true);

    setTimeout(() => {
      history.push(path);
    }, 760);
  };

  return (
    <HistoricMenuSection>
      <HistoricInner>
        <HistoricCopy>
          <div className="eyebrow">From the Archive</div>

          <h2>A Taste of Sonoma History</h2>

          <p>
            Before today&apos;s menus, there was the original Taste of the
            Himalayas lunch and dinner menu — now reimagined as a glowing
            historic centerpiece inspired by the restaurant&apos;s early Sonoma
            story.
          </p>
        </HistoricCopy>

        <MenuStage>
          <MenuCard $flipping={flipping}>
            <img
              src="/images/historic-menu-neon.png"
              alt="Enhanced recreated historic Taste of the Himalayas menu"
            />

            <div className="historical-note">
              Enhanced recreated historical visual based on the original
              physical menu.
            </div>
          </MenuCard>

          <MenuActions>
            <CtaButton onClick={() => setChooserOpen(true)}>
              See Today&apos;s Menu →
            </CtaButton>

            <Chooser $open={chooserOpen}>
              <button onClick={() => goToMenu("/lunch-menu")}>
                Lunch Menu
              </button>

              <button onClick={() => goToMenu("/dinner-menu")}>
                Dinner Menu
              </button>

              <button onClick={() => goToMenu("/to-go-menu")}>
                To-Go Menu
              </button>
            </Chooser>
          </MenuActions>
        </MenuStage>
      </HistoricInner>
    </HistoricMenuSection>
  );
};

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

      <HistoricMenuExperience />
      <OurStory />
      <FeaturedExperience />
      <MenuPreview />
    </HomeWrapper>
  );
};

export default Home;
