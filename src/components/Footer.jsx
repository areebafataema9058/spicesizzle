import React from "react";

import {
  FaLocationArrow,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h3> 🍽️Spice-Sizzle</h3>
        <div className="contact-info">
          <div className="location">
            <FaLocationArrow className="icon" />
            <span>4517 Washington Ave, Kentucky 39495</span>
          </div>
          <div className="phone">
            <FaPhoneAlt className="icon" />
            <span>+01780859632</span>
          </div>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <span>&copy; 2025 All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
