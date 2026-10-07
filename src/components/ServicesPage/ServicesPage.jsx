import "./ServicesPage.css";
import {
  FaSearch,
  FaPhoneAlt,
  FaWhatsapp,
  FaPassport,
  FaIdCard,
  FaAddressCard,
  FaFileAlt,
  FaCertificate,
  FaGraduationCap,
  FaBolt,
  FaMobileAlt,
  FaUniversity,
  FaPrint,
  FaCar,
  FaTicketAlt,
  FaCreditCard,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";

const PHONE_NUMBER = "919882222697";

const appointmentMessage =
  "Hi, I would like to book an appointment for your services at your shop. Please let me know when I can visit. Thank you!";

const services = [
  {
    category: "Identity & Documents",
    icon: <FaIdCard />,
    items: [
      ["PAN Card", "New PAN, correction & reprint assistance"],
      ["Passport", "New passport & renewal assistance"],
      ["Aadhaar", "Aadhaar update & correction assistance"],
      ["Voter ID", "New voter ID & correction assistance"],
      ["Driving Licence", "Online application assistance"],
      ["PVC Card", "PVC card & document printing"],
    ],
  },

  {
    category: "Certificates",
    icon: <FaCertificate />,
    items: [
      ["Income Certificate", "Online income certificate application"],
      ["Caste Certificate", "Caste certificate application assistance"],
      ["Domicile Certificate", "Residence & domicile application"],
      ["EWS Certificate", "EWS certificate application assistance"],
      ["Character Certificate", "Online character certificate assistance"],
      ["Birth Certificate", "Birth certificate application assistance"],
      ["Death Certificate", "Death certificate application assistance"],
    ],
  },

  {
    category: "Government & Online Forms",
    icon: <FaGlobe />,
    items: [
      ["Government Job Forms", "Online government job applications"],
      ["Competitive Exam Forms", "Online competitive exam applications"],
      ["Scholarship Forms", "Scholarship application assistance"],
      ["Government Schemes", "Online government scheme applications"],
      ["Online Registration", "Registration for various online services"],
      ["Application Form Filling", "Complete online form filling assistance"],
      ["Document Upload", "Online document upload & submission"],
    ],
  },

  {
    category: "Education & College",
    icon: <FaGraduationCap />,
    items: [
      ["College Admission Forms", "Online college admission applications"],
      ["University Forms", "University online form assistance"],
      ["Exam Forms", "Online examination form filling"],
      ["Examination Fee Payment", "Online exam fee payment assistance"],
      ["College Fee Payment", "Online college fee payment"],
      ["Scholarship Application", "Online scholarship applications"],
      ["Admit Card & Result", "Admit card & result download assistance"],
      ["Education Applications", "Other education-related online services"],
    ],
  },

  {
    category: "Bill Payment & Recharge",
    icon: <FaBolt />,
    items: [
      ["Electricity Bill", "Quick electricity bill payment"],
      ["Mobile Recharge", "Prepaid & postpaid mobile recharge"],
      ["DTH Recharge", "DTH recharge assistance"],
      ["Broadband Bill", "Internet & broadband bill payment"],
      ["Other Bill Payments", "Various online bill payments"],
    ],
  },

  {
    category: "Banking & Financial",
    icon: <FaCreditCard />,
    items: [
      ["Online Banking Assistance", "Help with online banking services"],
      ["Bank Forms", "Online bank form filling assistance"],
      ["Insurance Premium", "Online insurance premium payment"],
      ["Pension Assistance", "Online pension-related assistance"],
    ],
  },

  {
    category: "Printing & Digital Services",
    icon: <FaPrint />,
    items: [
      ["Printout", "Black & white document printing"],
      ["Colour Print", "High-quality colour printing"],
      ["Scanning", "Document scanning service"],
      ["Photocopy", "Document photocopy service"],
      ["Passport Size Photo", "Passport & ID size photographs"],
      ["Photo Editing", "Basic photo editing & formatting"],
      ["PDF Services", "PDF creation & conversion"],
      ["Email & Upload", "Email & online document upload"],
    ],
  },

  {
    category: "Other Online Services",
    icon: <FaCar />,
    items: [
      ["Vehicle Forms", "Online vehicle-related forms"],
      ["Railway Ticket Assistance", "Online railway ticket assistance"],
      ["Bus Ticket Assistance", "Online bus ticket booking assistance"],
      ["FASTag Recharge", "FASTag recharge assistance"],
      ["Online Appointment", "Online appointment booking assistance"],
      ["Digital Assistance", "General online digital assistance"],
    ],
  },
];

function ServicesPage() {
  const totalServices = services.reduce(
    (total, category) => total + category.items.length,
    0
  );

  const callNow = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  const whatsapp = (serviceName = "") => {
    const message = serviceName
      ? `Hi, I want to know more about ${serviceName} service at Suraj Communication.`
      : "Hi, I want to know more about your services at Suraj Communication.";

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const bookAppointment = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
        appointmentMessage
      )}`,
      "_blank"
    );
  };

  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-page-hero">

        <button
          className="services-back-btn"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft />
          Back
        </button>

        <span className="services-page-badge">
          SURaj COMMUNICATION
        </span>

        <h1>
          All Your Services
          <span> Under One Roof</span>
        </h1>

        <p>
          From government documents to online forms, bill payments,
          education services and digital assistance — get everything
          done quickly at Suraj Communication.
        </p>

        <div className="services-page-actions">
          <button className="services-call-btn" onClick={callNow}>
            <FaPhoneAlt />
            Call Now
          </button>

          <button
            className="services-whatsapp-btn"
            onClick={() => whatsapp()}
          >
            <FaWhatsapp />
            WhatsApp Us
          </button>

          <button
            className="services-appointment-btn"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>
        </div>

      </section>

      {/* SEARCH */}
      <section className="services-content">

        <div className="services-top">

          <div>
            <h2>Our Services</h2>
            <p>{totalServices}+ digital & government services</p>
          </div>

          <div className="services-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search a service..."
              onChange={(e) => {
                const value = e.target.value.toLowerCase();

                document
                  .querySelectorAll(".service-detail-card")
                  .forEach((card) => {
                    const text = card.innerText.toLowerCase();

                    card.style.display = text.includes(value)
                      ? "flex"
                      : "none";
                  });
              }}
            />
          </div>

        </div>

        {/* CATEGORIES */}
        {services.map((category, categoryIndex) => (
          <section className="service-category" key={categoryIndex}>

            <div className="service-category-heading">

              <div className="category-icon">
                {category.icon}
              </div>

              <div>
                <h2>{category.category}</h2>
                <p>{category.items.length} services</p>
              </div>

            </div>

            <div className="service-details-grid">

              {category.items.map(([name, description], index) => (
                <div className="service-detail-card" key={index}>

                  <div className="service-detail-icon">
                    {category.icon}
                  </div>

                  <div className="service-detail-info">

                    <h3>{name}</h3>

                    <p>{description}</p>

                    <div className="service-card-buttons">

                      <button
                        className="small-call-btn"
                        onClick={callNow}
                      >
                        <FaPhoneAlt />
                        Call
                      </button>

                      <button
                        className="small-whatsapp-btn"
                        onClick={() => whatsapp(name)}
                      >
                        <FaWhatsapp />
                        WhatsApp
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>
        ))}

        {/* BOTTOM CTA */}
        <section className="services-bottom-cta">

          <div>
            <span>Need help?</span>

            <h2>
              Not sure which service you need?
            </h2>

            <p>
              Call us or send us a WhatsApp message and
              we'll help you with the right service.
            </p>
          </div>

          <div className="bottom-cta-buttons">

            <button onClick={callNow}>
              <FaPhoneAlt />
              Call Now
            </button>

            <button onClick={() => whatsapp()}>
              <FaWhatsapp />
              WhatsApp
            </button>

          </div>

        </section>

      </section>

    </main>
  );
}

export default ServicesPage;