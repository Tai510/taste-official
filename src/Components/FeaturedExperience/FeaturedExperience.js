import React from "react";
import "./FeaturedExperience.css";

const FeaturedExperience = () => {
  return (
    <section className="featured-section">
      <div className="featured-row">
        <div className="featured-text">
          <p className="featured-kicker">The Experience</p>
          <h2>Colorful, Cozy, and Full of Character</h2>
          <p>
            From prayer flags along the patio to warm dining room details,
            Taste of the Himalayas brings a unique Sonoma atmosphere to every
            visit.
          </p>
        </div>

        <div className="featured-image">
          <img src="/images/patio.png" alt="Taste of the Himalayas patio" />
        </div>
      </div>

      <div className="featured-row reverse">
        <div className="featured-text">
          <p className="featured-kicker">Inside</p>
          <h2>A Dining Room with a Story</h2>
          <p>
            Hand-painted details, warm colors, and Himalayan-inspired touches
            make the space feel personal, welcoming, and memorable.
          </p>
        </div>

        <div className="featured-image">
          <img src="/images/interior.png" alt="Taste of the Himalayas interior" />
        </div>
      </div>

      <div className="featured-row">
        <div className="featured-text">
          <p className="featured-kicker">From the Kitchen</p>
          <h2>Traditional Flavors, Served Hot</h2>
          <p>
            Bold spices, sizzling dishes, fresh naan, and comforting classics
            prepared with care.
          </p>
        </div>

        <div className="featured-image">
          <img src="/images/tandoor.png" alt="Taste of the Himalayas food" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience;