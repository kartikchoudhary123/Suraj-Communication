import "./HeroCards.css";
import {
  FaPassport,
  FaIdCard,
  FaAddressCard,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

function HeroCards() {
  return (
    <div className="hero-cards">

      <div className="hero-card">
        <FaPassport />
        <h4>Passport</h4>
        <p>Apply & Renewal</p>
      </div>

      <div className="hero-card">
        <FaIdCard />
        <h4>PAN Card</h4>
        <p>New & Correction</p>
      </div>

      <div className="hero-card">
        <FaAddressCard />
        <h4>Aadhaar</h4>
        <p>Update Services</p>
      </div>

      <div className="hero-card">
        <FaFileAlt />
        <h4>Certificates</h4>
        <p>Income • Caste • Domicile</p>
      </div>

      <div className="hero-card hero-more">
        <FaArrowRight />
        <h4>View All</h4>
        <p>40+ Services</p>
      </div>

    </div>
  );
}

export default HeroCards;