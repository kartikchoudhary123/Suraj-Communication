import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const phoneNumber = "919882222697";
  const emailAddress = "surajcommunication001@gmail.com";

  const whatsappMessage =
    "Hi, I would like to know more about your services at Suraj Communication.";

  const mapsLink =
    "https://maps.app.goo.gl/g9MMniBijZqyXgRq6";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Suraj Communication</h2>

          <p>
            Your trusted digital service center for government,
            online and digital services.
          </p>

          <div className="footer-buttons">
            <a
              href="tel:+919882222697"
              className="footer-call-btn"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <button
              className="footer-whatsapp-btn"
              onClick={openWhatsApp}
            >
              <FaWhatsapp />
              WhatsApp
            </button>
          </div>

          {/* WORK WITH US */}
          <div className="footer-email">
            <div className="footer-email-icon">
              <FaEnvelope />
            </div>

            <div>
              <strong>Work With Us</strong>

              <p>
                Business enquiries, partnerships & collaborations
              </p>

              <a href={`mailto:${emailAddress}`}>
                {emailAddress}
              </a>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <a href="/services">Passport Services</a>
          <a href="/services">PAN Card</a>
          <a href="/services">Aadhaar Services</a>
          <a href="/services">Certificates</a>
          <a href="/services">Online Forms</a>
        </div>

        {/* VISIT US */}
        <div className="footer-column footer-visit">
          <h3>Visit Us</h3>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
            <span>Get Directions</span>
          </a>

          <div className="footer-info">
            <FaClock />

            <div>
              <strong>Opening Hours</strong>
              <span>Every Day</span>
              <span>9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © 2026 Suraj Communication. All Rights Reserved.
          </p>

          <p>
            Helping You Get Things Done, Digitally.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;