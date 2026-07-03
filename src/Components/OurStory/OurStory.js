import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="story-section">
      <div className="story-wrap">
        <div className="story-image-card">
          <img
            src="/images/restaurant-history.png"
            alt="Taste of the Himalayas Sonoma history"
          />
        </div>

        <div className="story-content">
          <p className="story-kicker">Sonoma • Since 2003</p>

          <h2>A Himalayan Kitchen with a Sonoma Heart</h2>

          <p>
            Taste of the Himalayas brings together the warm hospitality of
            Nepal, Tibet, and India with the welcoming spirit of Sonoma.
          </p>

          <p>
            From handmade dishes and bold spices to a cozy dining room filled
            with color and character, every meal is meant to feel personal,
            comforting, and memorable.
          </p>

          <div className="story-highlight">
            Traditional flavors. Local charm. Served with heart.
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
