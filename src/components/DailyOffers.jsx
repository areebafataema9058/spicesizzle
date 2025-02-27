import React from "react";
import "../assets/css/DailyOffers.css"

const DailyOffers = () => {
  return (
    <section className="daily-offers">
      {/* Left Side - Burger Image */}
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-photo/delicious-burger-with-fresh-ingredients_1236264-214.jpg"
          alt="Delicious Burger"
          className="offer-image"
        />
      </div>
      {/* <div className="burger-details">
        <h3>Delicious Burger</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <ul>
          <li>🍅 Tomato Sauce</li>
          <li>🥬 Vegetables</li>
          <li>🥗 Lettuce</li>
          <li>🧀 Cheese Slice</li>
        </ul>
      </div> */}

      {/* Center Text Content */}
      <div className="text-content">
        <h3>OUR DAILY OFFERS</h3>
        <h1>TASTE THE SAVINGS WITH OUR DAILY SPECIALS</h1>
        <p>
          Every day is an opportunity to enjoy your favorites at a discounted
          price. Explore our daily rotating specials and indulge in flavorful
          meals at a fraction of the cost.
        </p>
        <ul>
          <li>Seasonal & Locally Sourced Ingredients</li>
          <li>Vegetarian & Dietary-Friendly Options</li>
          <li>Exquisite Pairings & Unique Flavors</li>
        </ul>
        <div className="buttons">
          <button className="btn">Book Table</button>
          <button className="btn outline">Explore Menu →</button>
        </div>
      </div>

      {/* Right Side - Pizza Image */}
      <div className="image-container">
        <img
          src="https://www.dogtownpizza.com/wp-content/uploads/2014/09/pizza-picture-id181175167.jpg"
          alt="Delicious Pizza"
          className="offer-image"
        />
      </div>
    </section>
  );
};

export default DailyOffers;
