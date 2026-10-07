import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "919882222697";

  const whatsappMessage =
    "Hi, I would like to book an appointment for your services at your shop. Please let me know when I can visit. Thank you!";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
    setMenuOpen(false);
  };

  const callNow = () => {
    window.location.href = "tel:+9198822222697";
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="logo" onClick={closeMenu}>
          <div className="logo-box">S</div>

          <div className="logo-text">
            <h2>Suraj</h2>
            <p>Communication</p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/services">Services</a>
          </li>

          <li>
            <a href="/#gallery">Gallery</a>
          </li>

          <li>
            <a href="/#reviews">Reviews</a>
          </li>

          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="nav-buttons">

          <button className="call" onClick={callNow}>
            <FaPhoneAlt />
            <span>Call Now</span>
          </button>

          <button className="whatsapp" onClick={openWhatsApp}>
            <FaWhatsapp />
            <span>WhatsApp</span>
          </button>

          <button className="book" onClick={openWhatsApp}>
            <FaCalendarAlt />
            <span>Book Appointment</span>
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>

        <a href="/" onClick={closeMenu}>
          Home
        </a>

        <a href="/services" onClick={closeMenu}>
          Services
        </a>

        <a href="/#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="/#reviews" onClick={closeMenu}>
          Reviews
        </a>

        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>

        <div className="mobile-menu-buttons">

          <button className="call" onClick={callNow}>
            <FaPhoneAlt />
            Call Now
          </button>

          <button className="whatsapp" onClick={openWhatsApp}>
            <FaWhatsapp />
            WhatsApp
          </button>

          <button className="book" onClick={openWhatsApp}>
            <FaCalendarAlt />
            Book Appointment
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;