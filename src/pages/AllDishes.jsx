import React from "react";
import img1 from "../assets/images/starters.jpg";
import img2 from "../assets/images/seafood.jpg";
import img3 from "../assets/images/beverage.jpg";
import img4 from "../assets/images/dessert.jpg";
import img5 from "../assets/images/italianfood.jpg";
import img6 from "../assets/images/southfood.jpg";
import img7 from "../assets/images/fastfood.jpg";
import img8 from "../assets/images/indianfood.jpg";
// import "../assets/css/AllDishes.css";

const AllDishes = () => {
  const dishes = [
    {
      id: 1,
      title: "Starters",
      description:
        "Starters are small portions of food served before the main meal.",
      image: img1,
    },
    {
      id: 2,
      title: "SeaFood",
      description:
        "Seafood refers to any edible aquatic animal, including fish, shellfish (like clams, mussels, and oysters).",
      image: img2,
    },
    {
      id: 3,
      title: "Beverage",
      description: " A cold drink is a beverage that is served cold, usually by refrigerating it or adding ice. Cold drinks include soda, juice, and iced tea.",
      image: img3,
    },
    {
      id: 4,
      title: "Dessert",
      description:
        "a sweet course or dish that usually comes at the end of a meal. ",
      image: img4,
    },
    {
      id: 5,
      title: "Italian Food",
      description: "simplicity, fresh ingredients, and regional flavors.",
      image: img5,
    },
    {
      id: 6,
      title: "South Food",
      description: "its use of spices, coconut, rice, and lentils.",
      image: img6,
    },
    {
      id: 7,
      title: "FastFood",
      description:
        "a type of food that is prepared and served quickly, often for take-out..",
      image: img7,
    },
    {
      id: 8,
      title: "Indian Food",
      description:
        "its use of many spices and herbs, which create a variety of dishes with distinct flavors and aromas.",
      image: img8,
    },
  ];

  return (
    <div className="container">
      <h1>All Dishes</h1>
      <div className="dish-container">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDishes;
