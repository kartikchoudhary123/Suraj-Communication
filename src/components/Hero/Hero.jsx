import "./Hero.css";
import heroImg from "../../assets/images/hero.png";

function Hero() {
  return (
    <>
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <span className="hero-badge">
            YOUR TRUSTED DIGITAL SERVICE CENTER
          </span>

          <h1>
            <span>Suraj</span>
            <br />
            Communication
          </h1>

          <h2>
            Passport, PAN Card, Aadhaar &
            <br />
            All Government Services Under One Roof
          </h2>

          <p>
            We provide fast, reliable and hassle-free assistance
            for all your digital and government service needs.
          </p>

          <div className="hero-buttons">

            {/* EXPLORE SERVICES */}
            <button
              className="primary-btn"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              Explore Services →
            </button>

            {/* CONTACT US */}
            <button
              className="secondary-btn"
              onClick={() => {
                window.location.href = "tel:+919882222697";
              }}
            >
              Contact Us
            </button>

          </div>

          {/* TRUST FEATURES */}
          <div className="hero-features">

            <div className="feature">
              <span>⚡</span>
              <p>Fast Service</p>
            </div>

            <div className="feature-divider"></div>

            <div className="feature">
              <span>🛡️</span>
              <p>Trusted Center</p>
            </div>

            <div className="feature-divider"></div>

            <div className="feature">
              <span>👥</span>
              <p>5000+ Happy Customers</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">

          <div className="hero-image-wrapper">

            <div className="hero-glow"></div>

            <img
              src={heroImg}
              alt="Suraj Communication Shop"
            />

          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;