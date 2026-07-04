import React from "react";
import "./Menu.css";

const wineData = {
  white: [
    ["Albini Pinot Grigio", "Sonoma Valley, 2018", "9 / 36"],
    ["MacTostie Chardonnay", "Sonoma Coast, 2017", "11 / 24"],
    ["Laurier Chardonnay", "Carneros Sonoma, 2013", "8 / 32"],
    ["Roche Chardonnay", "Carneros Sonoma, 2016", "11 / 44"],
    ["Robledo Sauvignon Blanc", "Lake County, 2016", "10 / 40"],
    ["Cline Viognier", "North Coast, 2018", "9 / 36"],
    ["Robledo Riesling", "Lake County, 2013", "9 / 36"],
    ["Domain Laurer Brut", "187ml", "9"],
    ["Gloria Ferrer Blanc de Noirs", ".5 bottle", "20"],
    ["Sangria", "", "7"],
    ["House White", "", "7"],
  ],

  red: [
    ["Robledo Tempranillo", "Napa Valley, 2017", "11 / 44"],
    ["Albini Cabernet Franc", "Sonoma Valley, 2014", "36"],
    ["Enira Verdot Blend", "Bessa Valley Bulgaria, 2010", "26"],
    ["Laurier Pinot Noir", "Carneros, 2016", "9 / 36"],
    ["Casa Carneros Pinot Noir", "Carneros, 2007", "36"],
    ["Lesse Fitch Merlot", "California, 2016", "8 / 32"],
    ["Roche Merlot", "Carneros, 2014", "44"],
    ["Thirty-Seven Syrah", "Sonoma Coast, 2014", "9 / 36"],
    ["Thirty-Seven Tolay", "Sonoma Coast, 2014", "38"],
    ["Hwy 12 Cabernet", "Sonoma County, 2016", "9 / 36"],
    ["Plungerhead Old Vine Zinfandel", "Lodi, 2018", "8 / 32"],
    ["Lesse Fitch Zinfandel", "California, 2015", "28"],
    ["House Red", "", "7"],
  ],
};

const WineSection = ({ title, items }) => {
  return (
    <section className="poster-section">
      <h2>{title}</h2>

      {items.map(([name, description, price]) => (
        <article className="poster-item" key={`${title}-${name}`}>
          <div>
            <h3>{name}</h3>
            {description && <p>{description}</p>}
          </div>

          <strong>{price}</strong>
        </article>
      ))}
    </section>
  );
};

const WineList = () => {
  return (
    <main className="menu-app">
      <section className="menu-poster">
        <div className="poster-hero">
          <img
            src="/images/menu-hero.png"
            alt="Himalayan mountains and stupa"
          />
        </div>

        <header className="poster-title">
          <p>Taste of the Himalayas</p>

          <h1>Wine List</h1>

          <h4>Corkage $10</h4>
          <h4>Glass / Bottle</h4>
        </header>

        <div className="poster-columns">
          <div>
            <WineSection title="White & Chilled" items={wineData.white} />
          </div>

          <div>
            <WineSection title="Red" items={wineData.red} />
          </div>
        </div>

        <footer className="poster-footer">
          Please ask your server about current availability.
        </footer>
      </section>
    </main>
  );
};

export default WineList;
