import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/category1.jpg";
import img2 from "../assets/images/category2.jpg";
import img3 from "../assets/images/category3.jpg";
import img4 from "../assets/images/category4.jpg";
import img5 from "../assets/images/category5.jpg";
import img6 from "../assets/images/category6.jpg";
import "../assets/css/MenuCategories.css";

const categories = [
  { id: 1, img: img1, path: "starters", name: "Starters" },
  { id: 2, img: img2, path: "vegetables", name: "Vegetables" },
  { id: 3, img: img3, path: "seafood", name: "Seafood" },
  { id: 4, img: img4, path: "desserts", name: "Dessert" },
  { id: 5, img: img5, path: "beverage", name: "Beverage" },
  { id: 6, img: img6, path: "saladsoup", name: "Salads & Soups" },
];

const MenuCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="menu-section">
      <div className="container">
        <h1 className="menu-title">OUR MENU</h1>
        <p className="menu-description">Taste The Best That Surprise You!</p>
        <h2 className="special-menu-title">OUR SPECIAL MENU</h2>
        <p className="special-menu-description">
          Enjoy the unique dishes from the Basillico restaurant that only our
          restaurant has.
        </p>
        <div className="menu-category-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="menu-category-item"
              onClick={() => navigate(`/menu/${category.path}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={category.img}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
