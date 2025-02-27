import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "../assets/css/ContactUs.css";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
        errorMsg =
          value.trim().length < 3
            ? "Name must be at least 3 characters long."
            : "";
        break;
      case "email":
        errorMsg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email address.";
        break;
      case "phone":
        errorMsg =
          value && !/^\d+$/.test(value)
            ? "Phone number should contain only digits."
            : "";
        break;
      case "message":
        errorMsg =
          value.trim().length < 10
            ? "Message must be at least 10 characters long."
            : "";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input
    setErrors({ ...errors, [name]: validateForm(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors before submission
    const newErrors = {
      name: validateForm("name", formData.name),
      email: validateForm("email", formData.email),
      phone: validateForm("phone", formData.phone),
      message: validateForm("message", formData.message),
    };

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form submitted:", formData);
      alert("Your message has been sent successfully!");

      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      {/* Left Side */}
      <div className="contact-info">
        {/* <h1>Contact Us</h1> */}
        <h2>GET IN TOUCH WITH US</h2>
        <p>
          Have questions or feedback? Reach out to us through the form below,
          call us, or visit our restaurant. We're here to help and look forward
          to connecting with you!
        </p>
        <div className="contact-details">
          <p>27 Division St, New York, NY 10002, USA</p>
          <p>📞 +01 780 859 632</p>
          <p>📧 info@domainname.com</p>
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. John"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. John@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="e.g. +123 456 879 2"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write Message.."
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button
            type="submit"
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.message ||
              Object.values(errors).some((error) => error)
            }
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
