import "./QuickServices.css";
import {
  FaPassport,
  FaIdCard,
  FaAddressCard,
  FaFileAlt,
  FaCertificate,
  FaBolt,
  FaMobileAlt,
  FaWpforms,
  FaUniversity,
  FaPrint,
  FaGraduationCap,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

function QuickServices() {
  const WHATSAPP_NUMBER = "919882222697";

  const services = [
    {
      icon: <FaPassport />,
      title: "Passport",
      description: "New passport & renewal assistance",
    },
    {
      icon: <FaIdCard />,
      title: "PAN Card",
      description: "New PAN & correction services",
    },
    {
      icon: <FaAddressCard />,
      title: "Aadhaar",
      description: "Aadhaar update & assistance",
    },
    {
      icon: <FaCertificate />,
      title: "Income Certificate",
      description: "Apply for income certificate",
    },
    {
      icon: <FaFileAlt />,
      title: "Caste Certificate",
      description: "Caste certificate application",
    },
    {
      icon: <FaAddressCard />,
      title: "Domicile",
      description: "Domicile certificate assistance",
    },
    {
      icon: <FaBolt />,
      title: "Electricity Bill",
      description: "Quick electricity bill payment",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Recharge",
      description: "Mobile recharge & bill payment",
    },
    {
      icon: <FaWpforms />,
      title: "Online Forms",
      description: "Online form filling assistance",
    },
    {
      icon: <FaUniversity />,
      title: "Government Forms",
      description: "Government application forms",
    },
    {
      icon: <FaPrint />,
      title: "Print & Scan",
      description: "Print, scan & document services",
    },
    {
      icon: <FaGraduationCap />,
      title: "College & Exam Forms",
      description: "College & competitive exam forms",
    },
  ];

  const openWhatsApp = (serviceName) => {
    const message = `Hi, I have work related to ${serviceName}. What is the procedure for this service?`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const openServicesPage = () => {
    window.location.href = "/services";
  };

  return (
    <section className="quick-services">

      {/* SECTION HEADER */}
      <div className="quick-services-header">

        <span className="section-badge">
          OUR SERVICES
        </span>

        <h2>
          Quick & Easy <span>Services</span>
        </h2>

        <p>
          Get all your digital and government services done quickly
          and conveniently at Suraj Communication.
        </p>

      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        {services.map((service, index) => (
          <div
            className="service-item"
            key={index}
            onClick={() => openWhatsApp(service.title)}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

            <span className="service-arrow">
              <FaWhatsapp />
            </span>

          </div>
        ))}

      </div>

      {/* VIEW ALL */}
      <div className="quick-services-button">

        <button onClick={openServicesPage}>
          View All 40+ Services
          <FaArrowRight />
        </button>

      </div>

    </section>
  );
}

export default QuickServices;