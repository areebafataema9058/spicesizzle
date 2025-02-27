import React from "react";
import "../assets/css/Home.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";




const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h4 className="subheading">ART OF FINE DINING</h4>
        <h1 className="heading">DINING REDEFINED WITH EVERY BITE</h1>
        <p className="description">
          Immerse yourself in a dining experience like no other, where every
          dish is a masterpiece of flavor, crafted with care and precision. From
          the freshest ingredients.
        </p>
        <div className="buttons">
          <button className="book-btn">Book A Table</button>
          <button className="download-btn">Download App</button>
        </div>
      </div>
      <div className="image-section">
        <img src={img1} alt="Food" className="main-image" />
        <div className="side-images">
          <img src={img2} alt="Burger" className="side-image" />
          <img src={img3} alt="Restaurant" className="side-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
