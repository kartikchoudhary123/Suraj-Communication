import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import { db } from "../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Review form states
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // --------------------------------
  // FETCH APPROVED REVIEWS
  // --------------------------------
  const fetchReviews = async () => {
    setLoading(true);
    setError("");

    try {
      const reviewsRef = collection(db, "reviews");

      const reviewsQuery = query(
        reviewsRef,
        where("approved", "==", true),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(reviewsQuery);

      const reviewsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(reviewsData);
      setCurrentIndex(0);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Unable to load reviews.");
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // --------------------------------
  // NEXT REVIEW
  // --------------------------------
  const nextReview = () => {
    if (reviews.length === 0) return;

    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  // --------------------------------
  // PREVIOUS REVIEW
  // --------------------------------
  const previousReview = () => {
    if (reviews.length === 0) return;

    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  // --------------------------------
  // OPEN REVIEW FORM
  // --------------------------------
  const openReviewForm = () => {
    setSubmitMessage("");
    setSubmitError("");
    setShowReviewForm(true);
  };

  // --------------------------------
  // CLOSE REVIEW FORM
  // --------------------------------
  const closeReviewForm = () => {
    if (submitting) return;

    setShowReviewForm(false);

    setFormData({
      name: "",
      rating: 0,
      comment: "",
    });

    setSubmitMessage("");
    setSubmitError("");
  };

  // --------------------------------
  // HANDLE INPUT CHANGE
  // --------------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --------------------------------
  // SELECT RATING
  // --------------------------------
  const handleRating = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  // --------------------------------
  // SUBMIT REVIEW
  // --------------------------------
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    setSubmitError("");
    setSubmitMessage("");

    const name = formData.name.trim();
    const comment = formData.comment.trim();
    const rating = Number(formData.rating);

    // Validation
    if (!name) {
      setSubmitError("Please enter your name.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setSubmitError("Please select a rating.");
      return;
    }

    if (!comment) {
      setSubmitError("Please write your review.");
      return;
    }

    if (comment.length < 5) {
      setSubmitError("Review should be at least 5 characters.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        rating,
        comment,
        createdAt: serverTimestamp(),
        approved: false,
      });

      setSubmitMessage(
        "Thank you! Your review has been submitted and is waiting for approval."
      );

      setFormData({
        name: "",
        rating: 0,
        comment: "",
      });
    } catch (err) {
      console.error("Error submitting review:", err);
      setSubmitError(
        "Unable to submit your review. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // --------------------------------
  // AVERAGE RATING
  // --------------------------------
  const averageRating =
    reviews.length > 0
      ? (
        reviews.reduce(
          (total, review) =>
            total + Number(review.rating || 0),
          0
        ) / reviews.length
      ).toFixed(1)
      : "0.0";

  const currentReview = reviews[currentIndex];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">

        {/* HEADER */}
        <div className="reviews-header">
          <span className="reviews-badge">
            CUSTOMER REVIEWS
          </span>

          <h2>
            What Our <span>Customers Say</span>
          </h2>

          <p>
            We value every customer and every experience.
            Here's what people say about their experience
            with Suraj Communication.
          </p>
        </div>

        {/* RATING SUMMARY */}
        <div className="reviews-summary">

          <div className="overall-rating">
            <strong>
              {reviews.length > 0 ? averageRating : "—"}
            </strong>

            <div className="summary-stars">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    reviews.length > 0
                      ? "summary-star active"
                      : "summary-star"
                  }
                />
              ))}
            </div>

            <span>Customer Experience</span>
          </div>
        </div>

          {/* LOADING STATE */}
          {loading && (
            <div className="review-card">
              <p className="review-text">
                Loading customer reviews...
              </p>
            </div>
          )}

          {/* ERROR STATE */}
          {!loading && error && (
            <div className="review-card">
              <p className="review-text">
                {error}
              </p>
            </div>
          )}

          {/* NO REVIEWS */}
          {!loading && !error && reviews.length === 0 && (
            <div className="review-card">

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="review-text">
                No approved reviews yet.
                <br />
                Be the first to share your experience!
              </p>

            </div>
          )}

          {/* REVIEW SLIDER */}
          {!loading && !error && reviews.length > 0 && (
            <>
              <div className="review-slider">

                {/* PREVIOUS */}
                <button
                  className="review-arrow review-prev"
                  onClick={previousReview}
                  aria-label="Previous review"
                >
                  <FaArrowLeft />
                </button>

                {/* REVIEW CARD */}
                <div className="review-card">

                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>

                  {/* STARS */}
                  <div className="review-stars">
                    {[...Array(Number(currentReview.rating || 0))].map(
                      (_, index) => (
                        <FaStar key={index} />
                      )
                    )}
                  </div>

                  {/* COMMENT */}
                  <p className="review-text">
                    "{currentReview.comment}"
                  </p>

                  {/* PERSON */}
                  <div className="review-person">

                    <div className="review-avatar">
                      {currentReview.name
                        ? currentReview.name
                          .charAt(0)
                          .toUpperCase()
                        : "C"}
                    </div>

                    <div>
                      <h3>{currentReview.name}</h3>
                      <span>Local Customer</span>
                    </div>

                  </div>

                </div>

                {/* NEXT */}
                <button
                  className="review-arrow review-next"
                  onClick={nextReview}
                  aria-label="Next review"
                >
                  <FaArrowRight />
                </button>

              </div>

              {/* DOTS */}
              <div className="review-dots">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    className={
                      currentIndex === index
                        ? "review-dot active"
                        : "review-dot"
                    }
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Review ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className="review-cta">

            <div>
              <h3>Have you visited us?</h3>

              <p>
                We'd love to hear about your experience.
              </p>
            </div>

            <button
              className="review-whatsapp-btn"
              onClick={openReviewForm}
            >
              <FaStar />
              Share Your Review
            </button>

          </div>

        </div>

        {/* =====================================
          REVIEW FORM MODAL
      ===================================== */}
        {showReviewForm && (
          <div
            className="review-modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeReviewForm();
              }
            }}
          >

            <div className="review-modal">

              {/* MODAL HEADER */}
              <div className="review-modal-header">

                <div>
                  <span className="reviews-badge">
                    YOUR EXPERIENCE
                  </span>

                  <h2>
                    Share Your <span>Review</span>
                  </h2>

                  <p>
                    Tell us about your experience with
                    Suraj Communication.
                  </p>
                </div>

                <button
                  className="review-modal-close"
                  onClick={closeReviewForm}
                  disabled={submitting}
                  aria-label="Close review form"
                >
                  <FaTimes />
                </button>

              </div>

              {/* SUCCESS MESSAGE */}
              {submitMessage && (
                <div className="review-success-message">
                  <strong>Review submitted! 🎉</strong>
                  <p>{submitMessage}</p>

                  <button
                    type="button"
                    onClick={closeReviewForm}
                  >
                    Close
                  </button>
                </div>
              )}

              {/* FORM */}
              {!submitMessage && (
                <form
                  className="review-form"
                  onSubmit={handleSubmitReview}
                >

                  {/* NAME */}
                  <div className="review-form-group">

                    <label htmlFor="review-name">
                      Your Name
                    </label>

                    <input
                      id="review-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      maxLength={60}
                      disabled={submitting}
                    />

                  </div>

                  {/* RATING */}
                  <div className="review-form-group">

                    <label>
                      Your Rating
                    </label>

                    <div className="rating-selector">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={
                            star <= formData.rating
                              ? "rating-star selected"
                              : "rating-star"
                          }
                          onClick={() => handleRating(star)}
                          disabled={submitting}
                          aria-label={`${star} star rating`}
                        >
                          <FaStar />
                        </button>
                      ))}

                    </div>

                    <span className="rating-help">
                      {formData.rating === 0
                        ? "Select your rating"
                        : `${formData.rating} out of 5 stars`}
                    </span>

                  </div>

                  {/* COMMENT */}
                  <div className="review-form-group">

                    <label htmlFor="review-comment">
                      Your Review
                    </label>

                    <textarea
                      id="review-comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      placeholder="Write about your experience..."
                      rows="5"
                      maxLength={500}
                      disabled={submitting}
                    />

                    <span className="review-character-count">
                      {formData.comment.length}/500
                    </span>

                  </div>

                  {/* ERROR */}
                  {submitError && (
                    <div className="review-error-message">
                      {submitError}
                    </div>
                  )}

                  {/* BUTTONS */}
                  <div className="review-form-actions">

                    <button
                      type="button"
                      className="review-cancel-btn"
                      onClick={closeReviewForm}
                      disabled={submitting}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="review-submit-btn"
                      disabled={submitting}
                    >
                      {submitting
                        ? "Submitting..."
                        : "Submit Review"}
                    </button>

                  </div>

                  <p className="review-moderation-note">
                    Your review will be published after
                    approval.
                  </p>

                </form>
              )}

            </div>

          </div>
        )}

    </section>
  );
}

export default Reviews;