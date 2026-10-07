import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import QuickServices from "./components/QuickServices/QuickServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import GalleryShowcase from "./components/GalleryShowcase/GalleryShowcase";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import VisitOurShop from "./components/VisitOurShop/VisitOurShop";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import PageLoader from "./components/PageLoader/PageLoader";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import PageTransition from "./components/PageTransition/PageTransition";

function Home() {
  return (
    <>
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <QuickServices />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <GalleryShowcase />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <VisitOurShop />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Reviews />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Contact />
      </ScrollReveal>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Initial website loading animation */}
      <PageLoader />

      {/* Page-to-page transition */}
      <PageTransition>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ALL SERVICES */}
          <Route
            path="/services"
            element={<ServicesPage />}
          />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;