import React from "react";
import { useParams } from "react-router-dom";

import "../assets/css/MenuCategory.css";
import { menuData } from "../common/MenuData";

const MenuCategory = () => {
  const { category } = useParams();
  const normalizedCategory = category?.toLowerCase();
  const menuItems = menuData[normalizedCategory] || [];

  return (
    <div className="menu-container">
      <h2 className="menu-title">
        {category.replace(/-/g, " ").toUpperCase()}
      </h2>
      <div className="menu-grid">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-description">{item.description}</p>
              </div>
              <span className="menu-price">{item.price}</span>
            </div>
          ))
        ) : (
          <p className="menu-no-items">No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
