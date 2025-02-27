import React from "react";
import "../assets/css/Location.css";

const Location = () => {
  return (
    <div className="reservation-container">
      {/* Left Side - Heading & Open Hours */}
      <div className="reservation-info">
        <h1>
          RESERVE NOW YOUR TABLE
          <br />
          AND ENJOY DINING
          <br />
          EXPERIENCE.
        </h1>
        <div className="reservation-hours">
          <h3>Open Hours</h3>
          <p>
            Mon - Thu &nbsp; <strong>10:00 AM - 09:00 PM</strong>
          </p>
          <p>
            Fri - Sat &nbsp; <strong>09:00 AM - 10:00 PM</strong>
          </p>
          <p>
            Sun &nbsp; <strong>Closed</strong>
          </p>
        </div>
      </div>

      {/* Right Side - Reservation Form */}
      <div className="reservation-form-section">
        <div className="reservation-form">
          <h2>Reserve a Table</h2>
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="e.g. John" />

            <label>Email Address</label>
            <input type="email" placeholder="e.g. John@example.com" />

            <label>Phone Number</label>
            <input type="text" placeholder="e.g. 123 456 8792" />

            <label>Date</label>
            <input type="date" />

            <label>Time</label>
            <select>
              <option>Select time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>06:00 PM</option>
              <option>08:00 PM</option>
            </select>

            <label>Number of Persons</label>
            <select>
              <option>Number of persons</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            <button type="submit">Reserve Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
