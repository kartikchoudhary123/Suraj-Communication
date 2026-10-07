import {
  FaClock,
  FaDirections,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const mapsLink =
    "https://maps.app.goo.gl/g9MMniBijZqyXgRq6";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="contact-badge">CONTACT & VISIT</span>

          <h2>
            Visit <span>Suraj Communication</span>
          </h2>

          <p>
            Visit our shop for digital, government and online
            services. We are here to help you every day.
          </p>
        </div>

        <div className="contact-grid">

          {/* SHOP ADDRESS */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-card-content">
              <h3>Shop Address</h3>

              <p>
                Suraj Communication
                <br />
                Dhameta Road, near Nirankari Chat
                <br />
                Jasur Khas, Jassur
                <br />
                Himachal Pradesh 176201
              </p>
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaDirections />
            </div>

            <div className="contact-card-content">
              <h3>Find Us on Google Maps</h3>

              <p>
                Get directions to our shop directly through
                Google Maps.
              </p>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn"
              >
                <FaDirections />
                Get Directions
              </a>
            </div>
          </div>

          {/* OPENING HOURS */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaClock />
            </div>

            <div className="contact-card-content">
              <h3>Opening Hours</h3>

              <div className="opening-hours">
                <div className="hours-row">
                  <span>Monday – Sunday</span>
                  <strong>9:00 AM – 8:00 PM</strong>
                </div>
              </div>

              <p className="hours-note">
                Open every day
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;