import React from "react";
import { FaUtensils, FaPepperHot, FaRegBookmark } from "react-icons/fa"; // Import the icons
import "../assets/css/IconList.css";

const iconData = [
  {
    id: 1,
    name: "Premium Dining",
    description: "It's very personal, and can only be a positive experience.",
    icon: <FaUtensils />, // Utensils icon for dining
  },
  {
    id: 2,
    name: "Abundant Flavours",
    description: "At secret recipe, we take immense pride in crafting.",
    icon: <FaPepperHot />, // Spice or hot pepper icon for flavors
  },
  {
    id: 3,
    name: "Indigenous Meal",
    description: "With local ingredients, unique spins on traditional flavors.",
    icon: <FaRegBookmark />, // Bookmark icon for indigenous meal, can be customized
  },
];

const IconList = () => {
  return (
    <div className="icon-container">
      {iconData.map((item) => (
        <div key={item.id} className="icon-item">
          <div className="icon-image">{item.icon}</div>{" "}
          {/* Display the icon here */}
          <span className="icon-name">{item.name}</span>
          <span className="icon-desc">{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default IconList;
