import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

import "./GalleryShowcase.css";

import gallery1 from "../../assets/images/Gallery1.jpg";
import gallery2 from "../../assets/images/Gallery 2.jpg";
import gallery3 from "../../assets/images/Gallery 3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/Gallery 5.jpg";
import gallery6 from "../../assets/images/Gallery 6.jpg";
import gallery7 from "../../assets/images/Gallery 7.jpg";
import gallery8 from "../../assets/images/Gallery8.jpg";

function GalleryShowcase() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="gallery-showcase" id="gallery">
        <div className="gallery-content">

          {/* LEFT TEXT */}
          <div className="gallery-text">
            <span className="gallery-badge">
              OUR GALLERY
            </span>

            <h2>
              Take a Look
              <br />
              <span>Inside Our Shop</span>
            </h2>

            <p>
              Take a glimpse of Suraj Communication, our
              workspace and the environment where we
              provide digital and government services.
            </p>

            <div className="gallery-info">
              <strong>
                {String(currentIndex + 1).padStart(2, "0")}
              </strong>

              <span>
                /
              </span>

              <span>
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* CENTER SLIDESHOW */}
          <div className="gallery-slider">

            <div className="gallery-circle">

              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Suraj Communication ${currentIndex + 1}`}
              />

              <button
                className="gallery-expand"
                onClick={() => setSelectedImage(currentIndex)}
                aria-label="View image"
              >
                <FaExpand />
              </button>

            </div>

            {/* ARROWS */}
            <button
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <FaArrowLeft />
            </button>

            <button
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaArrowRight />
            </button>

            {/* DOTS */}
            <div className="gallery-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentIndex === index
                      ? "gallery-dot active"
                      : "gallery-dot"
                  }
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FULLSCREEN IMAGE */}
      {selectedImage !== null && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();

              setSelectedImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              );
            }}
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          <img
            src={images[selectedImage]}
            alt={`Suraj Communication ${selectedImage + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => {
              e.stopPropagation();

              setSelectedImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              );
            }}
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );
}

export default GalleryShowcase;