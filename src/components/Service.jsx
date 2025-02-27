import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Service.css"

const services = [
  {
    id: 1,
    icon: "🍽️",
    title: "Dine-In Experience",
    description:
      "Enjoy a cozy and vibrant ambiance with impeccable service and delicious meals crafted to perfection.",
  },
  {
    id: 2,
    icon: "📅",
    title: "Online Table Reservations",
    description:
      "Reserve your table effortlessly through our online booking system for a seamless dining experience.",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Home Delivery Service",
    description:
      "Savor your favorite dishes in the comfort of your home with our reliable and quick delivery service.",
  },
  {
    id: 4,
    icon: "🎉",
    title: "Catering for Events",
    description:
      "From small gatherings to grand celebrations, let us bring our culinary excellence to your special event.",
  },
  {
    id: 5,
    icon: "🥡",
    title: "Takeout Orders",
    description:
      "Convenient and fast takeout options for when you're on the go but still craving our flavors.",
  },
  {
    id: 6,
    icon: "🏠",
    title: "Private Dining",
    description:
      "Host intimate gatherings or private events in our dedicated dining space tailored to your needs.",
  },
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <h2 className="service-title">Our Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button
              onClick={() =>
                navigate(`/service/${service.id}`, { state: { service } })
              }
              className="service-button"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
