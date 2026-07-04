import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import OurStory from "../OurStory/OurStory";
import FeaturedExperience from "../FeaturedExperience/FeaturedExperience";
import MenuPreview from "../MenuPreview/MenuPreview";

const chooserRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const menuFloat = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
`;

const ambientPulse = keyframes`
  0%, 100% {
    opacity: 0.38;
    transform: translate(-50%, -50%) scale(0.94);
  }

  50% {
    opacity: 0.72;
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

const shimmerSweep = keyframes`
  0% {
    transform: translateX(-170%) skewX(-18deg);
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  42% {
    opacity: 0.48;
  }

  58% {
    opacity: 0.16;
  }

  72% {
    opacity: 0;
  }

  100% {
    transform: translateX(240%) skewX(-18deg);
    opacity: 0;
  }
`;

const fullPageFlip = keyframes`
  0% {
    transform:
      rotateX(0deg)
      rotateY(0deg)
      translateX(0)
      scale(1);

    opacity: 1;
    filter: brightness(1);
  }

  18% {
    transform:
      rotateX(1deg)
      rotateY(-22deg)
      translateX(-5px)
      scale(1.01);

    opacity: 1;
    filter: brightness(1.04);
  }

  42% {
    transform:
      rotateX(1deg)
      rotateY(-68deg)
      translateX(-18px)
      scale(0.98);

    opacity: 0.92;
    filter: brightness(1.1);
  }

  66% {
    transform:
      rotateX(0deg)
      rotateY(-112deg)
      translateX(-34px)
      scale(0.94);

    opacity: 0.58;
    filter: brightness(1.18);
  }

  84% {
    transform:
      rotateX(0deg)
      rotateY(-154deg)
      translateX(-48px)
      scale(0.9);

    opacity: 0.2;
    filter: brightness(1.32) blur(1px);
  }

  100% {
    transform:
      rotateX(0deg)
      rotateY(-178deg)
      translateX(-58px)
      scale(0.87);

    opacity: 0;
    filter: brightness(1.5) blur(2px);
  }
`;

const transitionGlow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.72);
  }

  45% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.82);
  }

  72% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1.04);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.38);
  }
`;

const HomeWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
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

const HistoricMenuSection = styled.section`
  position: relative;
  padding: 100px 18px 115px;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 74% 34%,
      rgba(229, 102, 0, 0.2),
      transparent 27%
    ),
    radial-gradient(
      circle at 88% 72%,
      rgba(16, 47, 99, 0.1),
      transparent 25%
    ),
    linear-gradient(
      180deg,
      #fcedd5 0%,
      #fff7e8 48%,
      #f4dfbf 100%
    );
`;

const HistoricInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1180px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 62px;
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 46px;
    text-align: center;
  }
`;

const HistoricCopy = styled.div`
  position: relative;
  z-index: 4;

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

  .archive-detail {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(78, 53, 32, 0.72);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .archive-detail::before {
    content: "";
    width: 34px;
    height: 2px;
    background: #e56600;
  }

  @media (max-width: 920px) {
    p {
      margin-left: auto;
      margin-right: auto;
    }

    .archive-detail {
      justify-content: center;
    }
  }
`;

const MenuStage = styled.div`
  position: relative;
  min-height: 700px;
  perspective: 1800px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    min-height: 580px;
  }
`;

const AmbientGlow = styled.div`
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 40%;

  width: 86%;
  aspect-ratio: 1;
  border-radius: 50%;

  transform: translate(-50%, -50%);

  background: radial-gradient(
    circle,
    rgba(255, 171, 64, 0.48) 0%,
    rgba(229, 102, 0, 0.19) 34%,
    rgba(16, 47, 99, 0.06) 55%,
    transparent 72%
  );

  filter: blur(18px);
  animation: ${ambientPulse} 4.8s ease-in-out infinite;
  pointer-events: none;
`;

const TransitionGlow = styled.div`
  position: absolute;
  z-index: 8;
  left: 50%;
  top: 40%;

  width: 94%;
  aspect-ratio: 1;
  border-radius: 50%;

  opacity: 0;
  pointer-events: none;

  background: radial-gradient(
    circle,
    rgba(255, 249, 224, 0.98) 0%,
    rgba(255, 185, 86, 0.82) 24%,
    rgba(229, 102, 0, 0.38) 48%,
    transparent 74%
  );

  ${({ $flipping }) =>
    $flipping &&
    css`
      animation: ${transitionGlow} 1.18s ease-out forwards;
    `}
`;

const FloatingShell = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  animation: ${({ $flipping }) =>
    $flipping
      ? "none"
      : css`
          ${menuFloat} 5.4s ease-in-out infinite
        `};
`;

const FlipCard = styled.div`
  position: relative;
  width: 100%;

  transform-style: preserve-3d;
  transform-origin: left center;
  will-change: transform, opacity, filter;

  transform:
    rotateX(${({ $rotateX }) => $rotateX}deg)
    rotateY(${({ $rotateY }) => $rotateY}deg)
    scale(${({ $active }) => ($active ? 1.018 : 1)});

  transition: transform 0.16s ease-out;

  ${({ $flipping }) =>
    $flipping &&
    css`
      pointer-events: none;
      animation: ${fullPageFlip} 1.18s
        cubic-bezier(0.45, 0, 0.22, 1) forwards;
    `}

  @media (max-width: 920px) {
    ${({ $flipping }) =>
      !$flipping &&
      css`
        transform: none;
      `}
  }
`;

const MenuCard = styled.div`
  position: relative;
  padding: 18px;
  overflow: hidden;
  border-radius: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.08),
      transparent 34%
    ),
    rgba(10, 25, 49, 0.98);

  border: 1px solid rgba(255, 255, 255, 0.11);

  box-shadow:
    ${({ $active }) =>
      $active
        ? `
          0 42px 90px rgba(16, 47, 99, 0.38),
          0 0 56px rgba(229, 102, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.13)
        `
        : `
          0 30px 72px rgba(16, 47, 99, 0.3),
          0 0 38px rgba(229, 102, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `};

  transition: box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    z-index: 6;
    top: -30%;
    left: -40%;
    width: 34%;
    height: 165%;
    pointer-events: none;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.32),
      transparent
    );

    filter: blur(3px);
    transform: translateX(-170%) skewX(-18deg);
    animation: ${shimmerSweep} 5.8s ease-in-out infinite;
  }
`;

const Spotlight = styled.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  border-radius: 28px;
  pointer-events: none;

  opacity: ${({ $active }) => ($active ? 1 : 0)};

  background: radial-gradient(
    280px circle at
      ${({ $mouseX }) => $mouseX}%
      ${({ $mouseY }) => $mouseY}%,
    rgba(255, 194, 108, 0.2),
    rgba(255, 255, 255, 0.05) 28%,
    transparent 64%
  );

  transition: opacity 0.25s ease;
`;

const MenuImageFrame = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  border-radius: 18px;
  transform: translateZ(24px);

  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.24),
    0 0 0 1px rgba(255, 255, 255, 0.07);

  img {
    width: 100%;
    display: block;
    border-radius: 18px;

    transition:
      transform 0.55s ease,
      filter 0.55s ease;
  }

  ${MenuCard}:hover & img {
    transform: scale(1.018);
    filter: saturate(1.06) contrast(1.025);
  }
`;

const HistoricalNote = styled.div`
  position: relative;
  z-index: 7;
  margin: 15px 8px 0;

  color: rgba(255, 248, 236, 0.72);
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
`;

const MenuActions = styled.div`
  position: relative;
  z-index: 20;

  margin-top: 28px;
  min-height: 145px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CtaButton = styled.button`
  border: none;
  cursor: pointer;

  min-width: 230px;
  height: 56px;
  padding: 0 28px;
  border-radius: 999px;

  color: #ffffff;
  background: linear-gradient(135deg, #d95f0b, #ef7300);

  font-size: 15px;
  font-weight: 900;

  box-shadow:
    0 14px 30px rgba(229, 102, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);

  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);

    box-shadow:
      0 19px 38px rgba(229, 102, 0, 0.36),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  &:disabled {
    cursor: default;
    opacity: 0.62;
    transform: none;
  }
`;

const Chooser = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};

  position: relative;
  z-index: 30;

  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

  padding: 10px;

  border: 1px solid rgba(16, 47, 99, 0.12);
  border-radius: 22px;

  background: rgba(255, 248, 236, 0.96);

  box-shadow:
    0 16px 34px rgba(16, 47, 99, 0.12),
    0 4px 12px rgba(16, 47, 99, 0.08);

  animation: ${chooserRise} 0.3s ease both;

  button {
    min-width: 132px;
    height: 48px;
    padding: 0 18px;

    border: 1px solid rgba(16, 47, 99, 0.18);
    border-radius: 14px;

    color: #102f63;
    background: #ffffff;

    font-size: 14px;
    font-weight: 850;

    cursor: pointer;

    transition:
      color 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  button:hover {
    color: #ffffff;
    background: #102f63;
    transform: translateY(-2px);
    box-shadow: 0 9px 18px rgba(16, 47, 99, 0.18);
  }

  button:disabled {
    cursor: default;
    opacity: 0.55;
    transform: none;
  }

  @media (max-width: 520px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

const HistoricMenuExperience = () => {
  const [chooserOpen, setChooserOpen] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const [tiltActive, setTiltActive] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  const cardRef = useRef(null);
  const history = useHistory();

  const handleMouseMove = (event) => {
    if (!cardRef.current || flipping) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = Math.max(
      0,
      Math.min(100, (x / rect.width) * 100)
    );

    const yPercent = Math.max(
      0,
      Math.min(100, (y / rect.height) * 100)
    );

    setMouseX(xPercent);
    setMouseY(yPercent);

    setRotateY(((xPercent - 50) / 50) * 5.5);
    setRotateX(((50 - yPercent) / 50) * 4.5);
  };

  const handleMouseEnter = () => {
    if (!flipping) {
      setTiltActive(true);
    }
  };

  const handleMouseLeave = () => {
    setTiltActive(false);
    setRotateX(0);
    setRotateY(0);
    setMouseX(50);
    setMouseY(50);
  };

  const revealChooser = () => {
    if (flipping) {
      return;
    }

    setChooserOpen((current) => !current);
  };

  const selectMenu = (path) => {
    if (flipping) {
      return;
    }

    setTiltActive(false);
    setRotateX(0);
    setRotateY(0);

    setChooserOpen(false);
    setFlipping(true);

    window.setTimeout(() => {
      history.push(path);
    }, 1080);
  };

  return (
    <HistoricMenuSection>
      <HistoricInner>
        <HistoricCopy>
          <div className="eyebrow">
            From the Archive
          </div>

          <h2>
            A Taste of Sonoma History
          </h2>

          <p>
            Before today&apos;s menus, there was the original Taste of the
            Himalayas lunch and dinner menu — now reimagined as a glowing
            historic centerpiece inspired by the restaurant&apos;s early Sonoma
            story.
          </p>

          <div className="archive-detail">
            A Sonoma story, reimagined
          </div>
        </HistoricCopy>

        <MenuStage>
          <AmbientGlow />

          <TransitionGlow $flipping={flipping} />

          <FloatingShell $flipping={flipping}>
            <FlipCard
              ref={cardRef}
              $rotateX={rotateX}
              $rotateY={rotateY}
              $active={tiltActive}
              $flipping={flipping}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <MenuCard $active={tiltActive}>
                <Spotlight
                  $active={tiltActive}
                  $mouseX={mouseX}
                  $mouseY={mouseY}
                />

                <MenuImageFrame>
                  <img
                    src="/images/historic-menu-neon.png"
                    alt="Enhanced recreated historic Taste of the Himalayas menu"
                  />
                </MenuImageFrame>

                <HistoricalNote>
                  Enhanced recreated historical visual based on the original
                  physical menu.
                </HistoricalNote>
              </MenuCard>
            </FlipCard>
          </FloatingShell>

          <MenuActions>
            <CtaButton
              type="button"
              onClick={revealChooser}
              disabled={flipping}
            >
              {flipping
                ? "Turning the Page..."
                : chooserOpen
                ? "Choose Today’s Menu ↓"
                : "See Today’s Menu →"}
            </CtaButton>

            <Chooser $open={chooserOpen}>
              <button
                type="button"
                disabled={flipping}
                onClick={() => selectMenu("/lunch-menu")}
              >
                Lunch Menu
              </button>

              <button
                type="button"
                disabled={flipping}
                onClick={() => selectMenu("/dinner-menu")}
              >
                Dinner Menu
              </button>

              <button
                type="button"
                disabled={flipping}
                onClick={() => selectMenu("/take-out")}
              >
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
          <Link
            className="primary-btn"
            to="/dinner-menu"
          >
            View Menu
          </Link>

          <Link
            className="secondary-btn"
            to="/contact"
          >
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