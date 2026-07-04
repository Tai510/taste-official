import React from "react";
import styled from "styled-components";

const StorySection = styled.section`
  position: relative;
  padding: 110px 18px 120px;
  overflow: hidden;
  background: radial-gradient(
      circle at 18% 12%,
      rgba(229, 102, 0, 0.1),
      transparent 30%
    ),
    linear-gradient(180deg, #fff7e8 0%, #fcedd5 100%);
`;

const StoryInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 58px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`;

const StoryArt = styled.div`
  position: relative;
  min-height: 610px;

  @media (max-width: 960px) {
    min-height: 680px;
  }

  @media (max-width: 620px) {
    min-height: 540px;
  }
`;

const ArtCard = styled.div`
  position: absolute;
  overflow: hidden;
  background: #f8e7c9;
  border: 1px solid rgba(148, 92, 43, 0.2);
  box-shadow: 0 24px 60px rgba(16, 47, 99, 0.16),
    0 8px 18px rgba(116, 69, 25, 0.08);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const AlleyEntranceCard = styled(ArtCard)`
  left: 0;
  top: 0;
  width: 82%;
  height: 430px;
  border-radius: 30px;
  transform: rotate(-1.3deg);

  @media (max-width: 620px) {
    width: 90%;
    height: 330px;
  }
`;

const AlleyPatioCard = styled(ArtCard)`
  right: 0;
  bottom: 0;
  width: 52%;
  height: 330px;
  border-radius: 26px;
  border: 10px solid #fff7e8;
  transform: rotate(2deg);

  @media (max-width: 960px) {
    width: 48%;
  }

  @media (max-width: 620px) {
    width: 64%;
    height: 245px;
    border-width: 7px;
  }
`;

const FloatingLabel = styled.div`
  position: absolute;
  left: 28px;
  bottom: 112px;
  z-index: 5;
  max-width: 250px;
  padding: 16px 18px;
  border-radius: 18px;
  color: #102f63;
  background: rgba(255, 248, 236, 0.92);
  border: 1px solid rgba(229, 102, 0, 0.2);
  box-shadow: 0 16px 36px rgba(16, 47, 99, 0.13);
  font-size: 14px;
  font-weight: 850;
  line-height: 1.45;

  span {
    display: block;
    margin-top: 4px;
    color: #e56600;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  @media (max-width: 620px) {
    left: 16px;
    bottom: 92px;
    max-width: 220px;
    font-size: 13px;
  }
`;

const StoryCopy = styled.div`
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
    margin: 0 0 22px;
    color: #102f63;
    font-size: clamp(38px, 5vw, 68px);
    line-height: 0.92;
    font-weight: 950;
    letter-spacing: -0.05em;
  }

  p {
    margin: 0 0 18px;
    color: #4e3520;
    font-size: 18px;
    line-height: 1.75;
  }

  .signature {
    margin-top: 30px;
    padding: 20px 22px;
    border-left: 5px solid #e56600;
    border-radius: 0 18px 18px 0;
    color: #102f63;
    background: rgba(255, 248, 236, 0.75);
    font-size: 20px;
    font-weight: 900;
    line-height: 1.45;
  }

  @media (max-width: 960px) {
    text-align: center;

    .signature {
      border-left: none;
      border-top: 5px solid #e56600;
      border-radius: 18px;
    }
  }
`;

const OurStory = () => {
  return (
    <StorySection id="our-story">
      <StoryInner>
        <StoryArt>
          <AlleyEntranceCard>
            <img
              src="/images/tintin-alley-entrance.png"
              alt="Illustrated entrance to the Sonoma alleyway"
            />
          </AlleyEntranceCard>

          <AlleyPatioCard>
            <img
              src="/images/tintin-alley-patio.png"
              alt="Illustrated Taste of the Himalayas alley patio"
            />
          </AlleyPatioCard>

          <FloatingLabel>
            Sonoma outside. Himalayan warmth inside.
            <span>Taste of the Himalayas</span>
          </FloatingLabel>
        </StoryArt>

        <StoryCopy>
          <div className="eyebrow">Our Story</div>

          <h2>Hidden in the Heart of Sonoma</h2>

          <p>
            Taste of the Himalayas is tucked into downtown Sonoma, close to the
            plaza and surrounded by the quiet charm of courtyards, passageways,
            local restaurants, and small-town discovery.
          </p>

          <p>
            Step through the alley and the feeling shifts from Sonoma sunlight
            to Himalayan warmth — colorful flags, intimate tables, hand-crafted
            details, and food rooted in Nepal, Tibet, and India.
          </p>

          <p>
            From the original physical menu to the menus guests enjoy today, the
            story has stayed the same: comforting Himalayan food served with
            Sonoma hospitality.
          </p>

          <div className="signature">
            A hidden Sonoma favorite, rooted in Himalayan flavor.
          </div>
        </StoryCopy>
      </StoryInner>
    </StorySection>
  );
};

export default OurStory;
