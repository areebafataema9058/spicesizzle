import React from "react";
import img1 from "../assets/images/soup.jpg";
import img2 from "../assets/images/salad.jpg";
import img3 from "../assets/images/maincourse.jpg";
import img4 from "../assets/images/chicken.jpg";
import { Link } from "react-router-dom";
import "../assets/css/MainDish.css";

const MainDish = () => {
  const dishes = [
    {
      id: 1,
      title: "Soups",
      description: "A classic Italian pasta dish with rich meat sauce.",
      image: img1,
    },
    {
      id: 2,
      title: "Salads",
      description:
        "Tender chicken breast grilled to perfection, served with vegetables.",
      image: img2,
    },
    {
      id: 3,
      title: "Main Course",
      description: "Crispy fish fillets in soft tortillas with a tangy slaw.",
      image: img3,
    },
    {
      id: 4,
      title: "Grilled Chicken",
      description:
        "A dish of chicken that's cooked on a grill and seasoned with herbs and spices.",
      image: img4,
    },
  ];

  return (
    <div className="container">
      <h1>Main Dishes</h1>
      <p className="hungry-line">
        Hungry for Something Delicious?{" "}
        <Link to="/all-dishes">View All Dishes</Link>
      </p>
      <div className="dish-container">
        {dishes.slice(0, 3).map((dish) => (
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

export default MainDish;
