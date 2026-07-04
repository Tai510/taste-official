import React from "react";
import "./Menu.css";

const menuData = {
  appetizers: [
    [
      "Pakoras",
      "Mixed deep-fried vegetable fritters served with mint sauce.",
      "$7",
    ],
    [
      "Samosas",
      "Two crisp patties stuffed with spiced potatoes and green peas, served with mint sauce.",
      "$7",
    ],
    [
      "Himalayan Salad",
      "Spring mix, cucumbers, radishes, carrots, tomatoes, and homemade dressing.",
      "$8",
    ],
    [
      "Chicken Chili",
      "Pan-fried chicken strips with green chili, onion, bell peppers, and spices.",
      "$9",
    ],
    [
      "Shekwa",
      "Tandoored lamb tenderloin bites with spices and fresh vegetables.",
      "$10",
    ],
    [
      "Veggie Momo",
      "Steamed vegetable dumplings served with tomato chutney.",
      "$9",
    ],
    ["Lamb Momo", "Steamed lamb dumplings served with tomato chutney.", "$11"],
    [
      "Daal",
      "Split pea soup served with steamed basmati rice or naan bread.",
      "$8",
    ],
  ],

  tandoori: [
    [
      "Vegetable Tandoori",
      "Mixed vegetables served on a sizzling platter.",
      "$17",
    ],
    [
      "Chicken Tandoori",
      "Bone-in chicken marinated and broiled in the tandoor oven.",
      "$18",
    ],
    [
      "Lamb Tandoori",
      "Boneless lamb cubes marinated and broiled in the tandoor oven.",
      "$20",
    ],
    [
      "Salmon Tandoori",
      "Salmon cubes marinated and broiled in the tandoor oven.",
      "$21",
    ],
    [
      "Tandoori Tikka",
      "Boneless chicken breast marinated and broiled in the tandoor oven.",
      "$19",
    ],
    [
      "Tandoori Mixed Grill",
      "A mix of chicken, lamb, and salmon tandoori.",
      "$25",
    ],
    [
      "Rack of Lamb",
      "Rack of lamb marinated in spices and broiled in the tandoor oven.",
      "$26",
    ],
  ],

  tarkari: [
    [
      "Mismas Tarkari",
      "Mixed vegetables cooked in onion and tomato gravy.",
      "$13",
    ],
    [
      "Alu Cauli",
      "Potatoes, cauliflower, and peas with onion and tomato gravy.",
      "$13",
    ],
    [
      "Alu Bhanta",
      "Himalayan-style eggplant and potatoes in curry sauce.",
      "$13",
    ],
    ["Chana Masala", "Sautéed chickpeas with herbs in an onion gravy.", "$12"],
    ["Saag Paneer", "Creamy spinach curry with fresh paneer cheese.", "$13"],
    [
      "Vegan Saag Paneer",
      "Creamy spinach curry prepared without paneer.",
      "$13",
    ],
    [
      "Chicken Chili",
      "Pan-fried chicken strips with peppers, onion, and jalapeño.",
      "$13",
    ],
    [
      "Shekwa",
      "Tandoored lamb cubes with peppers, onion, spinach, and spices.",
      "$13",
    ],
    ["Kukra Saag", "Boneless dark-meat chicken and spinach curry.", "$16"],
    ["Luksha", "Slow-cooked lamb and potato curry.", "$17"],
    ["Macha Tarkari", "Garlic, ginger, tomatoes, and salmon curry.", "$16"],
    ["Shrimp Tarkari", "Garlic, ginger, tomatoes, and shrimp curry.", "$16"],
  ],

  sides: [
    ["Plain Naan", "$4"],
    ["Garlic Cilantro Naan", "$4.50"],
    ["Garlic Basil Naan", "$4.50"],
    ["Papad", "$4"],
    ["Raita", "$4"],
    ["Mango Chutney", "$4"],
    ["Mixed Pickles", "$3"],
    ["Steamed Basmati Rice", "$4"],
    ["Mint Sauce", "$1"],
    ["Hot Sauce", "$1"],
  ],

  beverages: [
    ["Mango Lassi", "$5"],
    ["Fresh Lemonade", "$3"],
    ["Tea Herbal/Spiced", "$3"],
    ["Chai", "$5"],
    ["Sparkling Water", "$6"],
    ["Coke", "$3"],
    ["Diet Coke", "$3"],
    ["Sprite", "$3"],
  ],

  desserts: [
    ["Kheer", "Traditional rice pudding.", "$4"],
    ["Gulab Jamun", "Fried cheese balls with cardamom honey syrup.", "$4"],
  ],
};

const tikkaOptions = [
  ["Paneer", "$14"],
  ["Vegetable", "$14"],
  ["Salmon", "$16"],
  ["Shrimp", "$16"],
  ["Chicken", "$16"],
  ["Lamb", "$17"],
];

const cocoOptions = [
  ["Vegetable", "$14"],
  ["Paneer", "$14"],
  ["Salmon", "$16"],
  ["Shrimp", "$16"],
  ["Chicken", "$16"],
  ["Lamb", "$17"],
];

const PosterSection = ({ title, items }) => {
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

const CompactSection = ({ title, items }) => {
  return (
    <section className="poster-section compact">
      <h2>{title}</h2>

      <div className="compact-grid">
        {items.map(([name, price]) => (
          <div className="compact-item" key={`${title}-${name}`}>
            <span>{name}</span>
            <strong>{price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

const MasalaBox = ({ title, description, options }) => {
  return (
    <article className="masala-box">
      <h3>{title}</h3>
      <p>{description}</p>

      {options.map(([name, price]) => (
        <div key={`${title}-${name}`}>
          <span>{name}</span>
          <strong>{price}</strong>
        </div>
      ))}
    </article>
  );
};

const TakeOut = () => {
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

          <h1>Take-Out Menu</h1>

          <h4>
            Order for pickup <a href="tel:+17079961161">707-996-1161</a>
          </h4>

          <h4>We also serve vegan entrées. Ask for details.</h4>
        </header>

        <div className="poster-columns">
          <div>
            <PosterSection title="Appetizers" items={menuData.appetizers} />

            <PosterSection title="Tandoori" items={menuData.tandoori} />

            <CompactSection title="Sides" items={menuData.sides} />
          </div>

          <div>
            <PosterSection
              title="Tarkari (Curry Dishes)"
              items={menuData.tarkari}
            />

            <div className="masala-grid">
              <MasalaBox
                title="Tikka Masala"
                description="Slow-cooked creamy sauce with:"
                options={tikkaOptions}
              />

              <MasalaBox
                title="Coco Masala"
                description="Slow-cooked creamy coconut sauce with:"
                options={cocoOptions}
              />
            </div>

            <CompactSection title="Beverages" items={menuData.beverages} />

            <PosterSection title="Dessert" items={menuData.desserts} />
          </div>
        </div>

        <footer className="poster-footer">
          Please inform us of any allergies when placing your order.
        </footer>
      </section>
    </main>
  );
};

export default TakeOut;
