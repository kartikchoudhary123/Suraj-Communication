import { useEffect, useRef, useState } from "react";
import {
  FaExpand,
  FaPause,
  FaPhoneAlt,
  FaPlay,
  FaVolumeDown,
  FaVolumeMute,
  FaWhatsapp,
} from "react-icons/fa";

import "./VisitOurShop.css";

import tempVideo from "../../assets/Videos/suraj-communication-promo-shop-web1.mp4";

function VisitOurShop() {
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const phoneNumber = "919882222697";

  const whatsappMessage =
    "Hi, I would like to know more about your services at Suraj Communication.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+919882222697";
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    setDuration(video.duration);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video) return;

    setCurrentTime(video.currentTime);

    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleSeek = (event) => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const value = Number(event.target.value);

    video.currentTime = (value / 100) * video.duration;

    setProgress(value);
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const videoWrapper = document.querySelector(
      ".visit-video-wrapper"
    );

    if (!videoWrapper) return;

    if (!document.fullscreenElement) {
      videoWrapper.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const showVideoControls = () => {
    setShowControls(true);

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2200);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);

    setShowControls(true);

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2200);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(true);

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="visit-shop" id="visit-shop">
      <div className="visit-shop-container">

        {/* HEADING */}

        <div className="visit-shop-heading">
          <span className="visit-shop-badge">
            VISIT OUR SHOP
          </span>

          <h2>
            Come Visit <span>Suraj Communication</span>
          </h2>

          <p>
            Take a quick look at our shop and the environment
            where we help you with digital, government and
            online services.
          </p>
        </div>

        {/* VIDEO */}

        <div
          className={
            isPlaying
              ? "visit-video-wrapper playing"
              : "visit-video-wrapper paused"
          }
          onMouseMove={showVideoControls}
          onMouseLeave={() => {
            if (isPlaying) {
              setShowControls(false);
            }
          }}
        >
          <video
            ref={videoRef}
            className="visit-video"
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
            onClick={togglePlay}
          >
            <source
              src={tempVideo}
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

          {/* CENTER PLAY BUTTON */}

          {!isPlaying && (
            <button
              className="video-center-play"
              onClick={togglePlay}
              aria-label="Play video"
            >
              <FaPlay />
            </button>
          )}

          {/* CUSTOM CONTROLS */}

          <div
            className={
              showControls
                ? "custom-video-controls visible"
                : "custom-video-controls"
            }
          >
            <div className="video-progress-wrapper">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="video-progress"
                style={{
                  "--progress": `${progress}%`,
                }}
                aria-label="Video progress"
              />
            </div>

            <div className="video-controls-bottom">

              <div className="video-left-controls">

                <button
                  className="video-control-btn"
                  onClick={togglePlay}
                  aria-label={
                    isPlaying ? "Pause video" : "Play video"
                  }
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <button
                  className="video-control-btn"
                  onClick={toggleMute}
                  aria-label={
                    isMuted ? "Unmute video" : "Mute video"
                  }
                >
                  {isMuted ? (
                    <FaVolumeMute />
                  ) : (
                    <FaVolumeDown />
                  )}
                </button>

                <span className="video-time">
                  {formatTime(currentTime)}
                  {" / "}
                  {formatTime(duration)}
                </span>

              </div>

              <button
                className="video-control-btn"
                onClick={toggleFullscreen}
                aria-label="Fullscreen"
              >
                <FaExpand />
              </button>

            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="visit-shop-bottom">

          <div className="visit-shop-message">
            <h3>Need help with any service?</h3>

            <p>
              Call us or send us a WhatsApp message and
              we'll guide you through the process.
            </p>
          </div>

          <div className="visit-shop-buttons">

            <button
              className="visit-call-btn"
              onClick={callNow}
            >
              <FaPhoneAlt />
              Call Now
            </button>

            <button
              className="visit-whatsapp-btn"
              onClick={openWhatsApp}
            >
              <FaWhatsapp />
              WhatsApp Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VisitOurShop;