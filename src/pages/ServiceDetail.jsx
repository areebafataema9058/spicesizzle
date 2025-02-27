import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import serviceimg from "../assets/images/serviceimg.jpg"
import serviceimg1 from "../assets/images/serviceimg1.jpg"

// Single image for all services
// const serviceImage = "../assets/images/serviceimg.jpg";

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  if (!service) {
    return <h2 className="error-message">Service not found</h2>;
  }

  return (
    <div className="service-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Go Back
      </button>
      <h2 className="service-detail-title">{service.title}</h2>
      <img src={serviceimg} className="service-detail-image" />
      <p className="service-detail-description">{service.description}</p>
      <p className="service-detail-text">
        At SpicyHunt, our dine-in experience is designed to offer you the
        perfect blend of comfort, ambiance, and culinary delight. Enjoy our
        thoughtfully crafted interiors, warm hospitality, and a menu filled with
        flavorful dishes made from the freshest ingredients. Whether it’s a
        family gathering, a date night, or a casual meal, we strive to make
        every visit memorable.
      </p>
      <p>
        Step into SpicyHunt and immerse yourself in a welcoming ambiance that
        combines elegance and comfort. Our dine-in experience is curated to
        delight all your senses, from the inviting decor to the aroma of freshly
        prepared dishes. Whether you’re celebrating a special occasion, catching
        up with friends, or simply enjoying a meal out, our attentive staff and
        thoughtfully crafted menu ensure every moment is special. Savor a wide
        range of dishes made with the finest ingredients, all served with a
        touch of warmth and care. At SpicyHunt, dining is more than just a
        meal—it’s an experience to remember.
      </p>
      <h1 className="service-detail-head">KEY features of spicyhunt</h1>
      <p className="service-detail-text">
        Discover what makes SpicyHunt stand out! From our carefully crafted
        dishes bursting with flavor to our warm and inviting atmosphere, every
        detail is designed to offer you an exceptional dining experience. With a
        focus on quality ingredients, prompt service, and customer satisfaction,
        we take pride in delivering the perfect blend of tradition and
        innovation. Explore the key features that set us apart and make
        SpicyHunt your go-to destination for great food and unforgettable
        moments.
      </p>
      <p>
        SpicyHunt is all about exceptional flavors, warm hospitality, and a
        dining experience like no other. From our diverse menu crafted with the
        freshest ingredients to our cozy and vibrant atmosphere, we focus on
        creating memorable moments for every guest. With attention to detail,
        prompt service, and a passion for quality, we’re proud to be your
        ultimate destination for delicious food and great company
      </p>
      <div>
        <ul>
          <li>Authentic flavor meet innovative recipe craft with care.</li>
          <li>Exceptional service in a warm & welcoming ambiance.</li>
          <li>Fresh ingredient delivering quality & taste in every bite.</li>
          <li>Where tradition blends with modern culinary excellence.</li>
        </ul>
        <img src={serviceimg1}/>
      </div>
    </div>
  );
};

export default ServiceDetail;
