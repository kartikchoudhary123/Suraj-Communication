import "./WhyChooseUs.css";
import {
  FaBolt,
  FaShieldAlt,
  FaLayerGroup,
  FaRupeeSign,
  FaHeadset,
  FaMapMarkerAlt,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaBolt />,
      title: "Fast & Easy Service",
      description:
        "Quick assistance for your digital and government service needs.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Reliable",
      description:
        "We focus on clear guidance and reliable assistance for every customer.",
    },
    {
      icon: <FaLayerGroup />,
      title: "All Services Under One Roof",
      description:
        "Access documents, forms, bills, printing and digital services at one place.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Transparent Assistance",
      description:
        "Get clear information about the service before proceeding.",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      description:
        "Need help? Contact us for guidance with your online service requirements.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local Service Center",
      description:
        "Convenient local assistance for your everyday digital service needs.",
    },
  ];

  return (
    <section className="why-choose-us">

      {/* HEADER */}
      <div className="why-header">

        <span className="why-badge">
          WHY CHOOSE US
        </span>

        <h2>
          Why Choose <span>Suraj Communication?</span>
        </h2>

        <p>
          We make digital and government services simpler,
          faster and more convenient for you.
        </p>

      </div>

      {/* CARDS */}
      <div className="why-grid">

        {reasons.map((reason, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {reason.icon}
            </div>

            <div className="why-content">

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;