import React, { forwardRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";

import OurStory from "../OurStory/OurStory";
import FeaturedExperience from "../FeaturedExperience/FeaturedExperience";
import MenuPreview from "../MenuPreview/MenuPreview";

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
  }

  .primary-btn {
    color: #ffffff;
    background: #e56600;
    border: 2px solid #e56600;
  }

  .secondary-btn {
    color: #102f63;
    background: rgba(255, 248, 236, 0.96);
    border: 2px solid #102f63;
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
  background: radial-gradient(
      circle at 74% 34%,
      rgba(229, 102, 0, 0.2),
      transparent 27%
    ),
    radial-gradient(circle at 88% 72%, rgba(16, 47, 99, 0.1), transparent 25%),
    linear-gradient(180deg, #fcedd5 0%, #fff7e8 48%, #f4dfbf 100%);
`;

const HistoricInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: 52px;
  align-items: center;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HistoricCopy = styled.div`
  position: relative;
  z-index: 4;
  opacity: ${({ $bookOpen }) => ($bookOpen ? 0 : 1)};
  transition: opacity 0.45s ease;
  pointer-events: ${({ $bookOpen }) => ($bookOpen ? "none" : "auto")};

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

  @media (max-width: 1050px) {
    display: ${({ $bookOpen }) => ($bookOpen ? "none" : "block")};

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
  min-height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AmbientGlow = styled.div`
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 42%;
  width: 88%;
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

const BookPresentation = styled.div`
  position: relative;
  z-index: 5;
  width: 1000px;
  height: 650px;
  min-width: 1000px;
  min-height: 650px;
  margin: 0 auto;
  filter: drop-shadow(0 24px 34px rgba(59, 33, 17, 0.22));

  @media (max-width: 1180px) {
    transform: scale(0.82);
    transform-origin: center center;
    margin-top: -50px;
    margin-bottom: -50px;
  }

  @media (max-width: 760px) {
    transform: scale(0.58);
    margin-top: -120px;
    margin-bottom: -120px;
  }
`;

const FlipBookShell = styled.div`
  position: relative;
  z-index: 5;
  width: 1000px;
  height: 650px;
  min-width: 1000px;
  min-height: 650px;
  margin: 0 auto;
  overflow: visible;

  .historic-real-flipbook,
  .stf__parent,
  .stf__wrapper {
    margin: 0 auto !important;
  }

  .stf__block {
    border-radius: 6px;
    overflow: hidden;
  }
`;

const FlipPageShell = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff8ea;
  border-radius: 6px;
  user-select: none;
  border: 1px solid rgba(94, 58, 31, 0.32);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45),
    inset 0 0 28px rgba(98, 62, 30, 0.1);
`;

const HistoricImagePage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #075457;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  .historic-note {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 16px;
    padding: 10px 14px;
    border-radius: 14px;
    color: rgba(255, 248, 236, 0.94);
    background: rgba(4, 49, 51, 0.84);
    backdrop-filter: blur(7px);
    font-size: 12px;
    line-height: 1.4;
    text-align: center;
  }
`;

const BookStoryPage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 42px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 250, 239, 0.88),
      rgba(255, 244, 221, 0.9)
    ),
    radial-gradient(circle at 18% 12%, rgba(229, 102, 0, 0.08), transparent 26%),
    linear-gradient(145deg, #fffdf8, #f4dfbd);
  text-align: center;
  border-right: 1px solid rgba(102, 67, 35, 0.12);

  &::before {
    content: "✥";
    margin-bottom: 20px;
    color: #d86b12;
    font-size: 26px;
    line-height: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 36px;
    right: 36px;
    bottom: 30px;
    height: 86px;
    opacity: 0.24;
    background: linear-gradient(
        135deg,
        transparent 48%,
        rgba(16, 47, 99, 0.4) 49%,
        transparent 51%
      ),
      linear-gradient(
        45deg,
        transparent 47%,
        rgba(16, 47, 99, 0.34) 48%,
        transparent 51%
      ),
      linear-gradient(
        135deg,
        transparent 58%,
        rgba(16, 47, 99, 0.25) 59%,
        transparent 61%
      );
    background-size: 210px 86px, 230px 86px, 270px 86px;
    background-position: 0 20px, 115px 22px, 260px 18px;
    background-repeat: repeat-x;
    pointer-events: none;
  }

  .eyebrow {
    margin-bottom: 16px;
    color: #e56600;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.34em;
    text-transform: uppercase;
  }

  h3 {
    max-width: 390px;
    margin: 0 auto 20px;
    color: #102f63;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 35px;
    line-height: 1.04;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .divider {
    width: 170px;
    height: 1px;
    margin: 0 auto 28px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(16, 47, 99, 0.46),
      transparent
    );
  }

  .divider::after {
    content: "❧";
    position: relative;
    top: -10px;
    display: inline-block;
    padding: 0 12px;
    color: #4e3520;
    background: #fff6e6;
    font-size: 16px;
  }

  p {
    max-width: 430px;
    margin: 0 auto 28px;
    color: #4e3520;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px;
    line-height: 1.75;
  }

  .archive-detail {
    position: relative;
    z-index: 2;
    margin-top: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    color: rgba(78, 53, 32, 0.76);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .archive-detail::before,
  .archive-detail::after {
    content: "";
    width: 42px;
    height: 1px;
    background: #e56600;
  }
`;

const MenuChoicePage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 42px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 250, 239, 0.88),
      rgba(255, 244, 221, 0.92)
    ),
    radial-gradient(circle at 72% 20%, rgba(229, 102, 0, 0.1), transparent 28%),
    linear-gradient(145deg, #fffdf8, #f4dfbd);
  text-align: center;
  border-left: 1px solid rgba(102, 67, 35, 0.12);

  &::before {
    content: "";
    position: absolute;
    left: 34px;
    right: 34px;
    bottom: 30px;
    height: 86px;
    opacity: 0.24;
    background: linear-gradient(
        135deg,
        transparent 48%,
        rgba(16, 47, 99, 0.4) 49%,
        transparent 51%
      ),
      linear-gradient(
        45deg,
        transparent 47%,
        rgba(16, 47, 99, 0.34) 48%,
        transparent 51%
      ),
      linear-gradient(
        135deg,
        transparent 58%,
        rgba(16, 47, 99, 0.25) 59%,
        transparent 61%
      );
    background-size: 210px 86px, 230px 86px, 270px 86px;
    background-position: 0 20px, 115px 22px, 260px 18px;
    background-repeat: repeat-x;
    pointer-events: none;
  }

  .choice-eyebrow {
    margin-bottom: 14px;
    color: #e56600;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.32em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 14px;
    color: #102f63;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 34px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .choice-divider {
    width: 160px;
    height: 1px;
    margin: 0 auto 22px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(16, 47, 99, 0.42),
      transparent
    );
  }

  .choice-divider::after {
    content: "✥";
    position: relative;
    top: -10px;
    display: inline-block;
    padding: 0 12px;
    color: #d86b12;
    background: #fff6e6;
    font-size: 13px;
  }

  p {
    max-width: 310px;
    margin: 0 auto 24px;
    color: #5b4029;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 1.65;
  }

  .menu-links {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 305px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  button {
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 34px 1fr;
    align-items: center;
    gap: 10px;
    border: 0;
    border-bottom: 1px solid rgba(94, 58, 31, 0.22);
    color: #102f63;
    background: transparent;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    text-align: left;
    transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease,
      box-shadow 0.2s ease;
  }

  button span {
    color: #d86b12;
    font-size: 18px;
    text-align: center;
  }

  button:hover {
    color: #ffffff;
    background: #102f63;
    border-bottom-color: transparent;
    border-radius: 999px;
    transform: translateX(4px);
    box-shadow: 0 10px 22px rgba(16, 47, 99, 0.18);
  }

  button:hover span {
    color: #f9c66d;
  }
`;

const FlipInstruction = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 28px;
  color: rgba(78, 53, 32, 0.7);
  font-size: 13px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FlipPage = forwardRef(({ children }, ref) => {
  return <FlipPageShell ref={ref}>{children}</FlipPageShell>;
});

FlipPage.displayName = "FlipPage";

const HistoricMenuExperience = () => {
  const [bookOpen, setBookOpen] = useState(false);
  const history = useHistory();

  const goToMenu = (event, path) => {
    event.stopPropagation();
    history.push(path);
  };

  return (
    <HistoricMenuSection id="historic-menu">
      <HistoricInner>
        <HistoricCopy $bookOpen={bookOpen}>
          <div className="eyebrow">From the Archive</div>

          <h2>A Taste of Sonoma History</h2>

          <p>
            Before today&apos;s menus, there was the original Taste of the
            Himalayas lunch and dinner menu — now reimagined as a glowing
            historic centerpiece inspired by the restaurant&apos;s early Sonoma
            story.
          </p>

          <div className="archive-detail">Flip the archive menu</div>
        </HistoricCopy>

        <MenuStage>
          <AmbientGlow />

          <BookPresentation>
            <FlipBookShell>
              <HTMLFlipBook
                width={500}
                height={650}
                size="fixed"
                minWidth={500}
                maxWidth={500}
                minHeight={650}
                maxHeight={650}
                drawShadow={true}
                flippingTime={1050}
                usePortrait={false}
                startZIndex={0}
                autoSize={false}
                maxShadowOpacity={0.45}
                showCover={true}
                mobileScrollSupport={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={false}
                disableFlipByClick={false}
                className="historic-real-flipbook"
                onFlip={(event) => setBookOpen(event.data > 0)}
              >
                <FlipPage>
                  <HistoricImagePage>
                    <img
                      src="/images/historic-menu-book-cover.png"
                      alt="Enhanced recreated historic Taste of the Himalayas menu"
                    />

                    <div className="historic-note">
                      Enhanced recreated historical visual based on the original
                      physical menu.
                    </div>
                  </HistoricImagePage>
                </FlipPage>

                <FlipPage>
                  <BookStoryPage>
                    <div className="eyebrow">Our Story</div>

                    <h3>A Taste of the Himalayas</h3>

                    <div className="divider" />

                    <p>
                      Hidden near Sonoma Plaza, Taste of the Himalayas brings
                      Nepalese and Indian comfort food into one warm gathering
                      place — a small doorway into big flavor, family recipes,
                      and Sonoma memories.
                    </p>

                    <div className="archive-detail">
                      A Sonoma story, reimagined
                    </div>
                  </BookStoryPage>
                </FlipPage>

                <FlipPage>
                  <MenuChoicePage>
                    <div className="choice-eyebrow">Today&apos;s Menus</div>

                    <h3>Choose Your Menu</h3>

                    <div className="choice-divider" />

                    <p>
                      Select where you want to go after turning the historic
                      page.
                    </p>

                    <div className="menu-links">
                      <button
                        type="button"
                        onClick={(event) => goToMenu(event, "/lunch-menu")}
                      >
                        <span>❧</span>
                        Lunch Menu
                      </button>

                      <button
                        type="button"
                        onClick={(event) => goToMenu(event, "/dinner-menu")}
                      >
                        <span>❧</span>
                        Dinner Menu
                      </button>

                      <button
                        type="button"
                        onClick={(event) => goToMenu(event, "/take-out")}
                      >
                        <span>❧</span>
                        To-Go Menu
                      </button>

                      <button
                        type="button"
                        onClick={(event) => goToMenu(event, "/wine-list")}
                      >
                        <span>❧</span>
                        Wine List
                      </button>
                    </div>
                  </MenuChoicePage>
                </FlipPage>
              </HTMLFlipBook>
            </FlipBookShell>
          </BookPresentation>

          <FlipInstruction>
            Click or drag the menu page to turn it
          </FlipInstruction>
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

          <Link className="secondary-btn" to="/contact">
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