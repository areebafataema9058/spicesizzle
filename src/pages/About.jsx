import React from "react";
import "../assets/css/About.css";
import restaurantImage from "../assets/images/resturant.jpg";
import DailyOffers from "../components/DailyOffers";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-content">
          <h5>ABOUT US</h5>
          <h2>
            OUR COMMITMENT TO <span>AUTHENTICITY & EXCELLENCE</span>
          </h2>
          <p>
            Every dish we create is a celebration of connection, crafted with
            passion and inspired by diverse flavors. Join us in an inviting
            space where every bite sparks joy and every moment becomes a
            cherished memory.
          </p>
          <ul>
            <li>✔ Seasonal & Locally Sourced Ingredients</li>
            <li>✔ Vegetarian & Dietary-Friendly Options</li>
            <li>✔ Exquisite Pairings & Unique Flavors</li>
          </ul>
          <div className="buttons">
            <button className="order-btn">Order Now</button>
            <button className="read-btn">Read More</button>
          </div>
        </div>

        <div className="about-images">
          <div className="main-image">
            <img src={restaurantImage} alt="Restaurant Interior" />
            {/* <div className="experience-badge">30+ years of experience</div> */}
          </div>
        </div>
      </section>

      {/* Place the DailyOffers component here */}
      <DailyOffers />
    </>
  );
};

export default About;
