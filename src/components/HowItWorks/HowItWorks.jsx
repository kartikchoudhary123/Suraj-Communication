import "./HowItWorks.css";
import {
  FaSearch,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Choose Your Service",
      description:
        "Select the service you need — PAN, Passport, Aadhaar, certificates, bills, forms and more.",
    },
    {
      number: "02",
      icon: <FaWhatsapp />,
      title: "Call or WhatsApp",
      description:
        "Contact us to discuss your work, required documents and the procedure before visiting.",
    },
    {
      number: "03",
      icon: <FaMapMarkerAlt />,
      title: "Visit & Get It Done",
      description:
        "Bring the required documents to Suraj Communication and get assistance with your service.",
    },
  ];

  const openWhatsApp = () => {
    const message =
      "Hi, I would like to know about your services. Please guide me about the procedure.";

    window.open(
      `https://wa.me/919882222697?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="how-it-works">

      {/* HEADER */}
      <div className="how-header">

        <span className="how-badge">
          HOW IT WORKS
        </span>

        <h2>
          Get Your Work Done in{" "}
          <span>3 Simple Steps</span>
        </h2>

        <p>
          Simple, quick and hassle-free assistance for your
          digital and government service needs.
        </p>

      </div>

      {/* STEPS */}
      <div className="how-steps">

        {steps.map((step, index) => (
          <div className="how-step-wrapper" key={step.number}>

            <div className="how-step">

              <div className="how-step-top">

                <span className="step-number">
                  {step.number}
                </span>

                <div className="step-icon">
                  {step.icon}
                </div>

              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

            {index < steps.length - 1 && (
              <div className="step-arrow">
                <FaArrowRight />
              </div>
            )}

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="how-cta">

        <div>
          <h3>Need help choosing a service?</h3>

          <p>
            Send us a WhatsApp message and we'll guide you.
          </p>
        </div>

        <button onClick={openWhatsApp}>
          <FaWhatsapp />
          WhatsApp Us
        </button>

      </div>

    </section>
  );
}

export default HowItWorks;