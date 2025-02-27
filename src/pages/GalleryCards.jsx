import React from "react";
import galleryimg1 from "../assets/images/gallery1.jpg";
import galleryimg2 from "../assets/images/gallery2.jpg";
import galleryimg3 from "../assets/images/gallery3.jpg";
import galleryimg4 from "../assets/images/gallery4.jpg";
import galleryimg5 from "../assets/images/gallery5.jpg";
import galleryimg6 from "../assets/images/gallery6.jpg";
import galleryimg7 from "../assets/images/gallery7.jpg";
import galleryimg8 from "../assets/images/gallery8.jpg";
import galleryimg9 from "../assets/images/gallery9.jpg";
import galleryimg10 from "../assets/images/gallery10.jpg";
import  galleryimg11 from "../assets/images/gallery11.jpg"
import galleryimg12 from "../assets/images/gallery12.jpg"
import "../assets/css/GalleryCards.css";

const GalleryCards = () => {
  const galleryItems = [
    { id: 1, image: galleryimg1 },
    { id: 2, image: galleryimg2 },
    { id: 3, image: galleryimg3 },
    { id: 4, image: galleryimg4 },
    { id: 5, image: galleryimg5 },
    { id: 6, image: galleryimg6 },
    { id: 7, image: galleryimg7 },
    { id: 8, image: galleryimg8 },
    { id: 9, image: galleryimg9 },
    { id: 10, image: galleryimg10 },
    { id: 11, image: galleryimg11 },
    { id: 12, image: galleryimg12},
  ];

  return (
    <div className="gallery-container">  
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-card">
          <img
            src={item.image}
            alt={`Gallery image ${item.id}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;
