/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";

const IntegrationsectionTwo = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src =
        "https://www.youtube.com/embed/SixdAQtWJQ8?si=TPxjQ04JgcZ5eEA9";
    }
  };

  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "";
    }
  };

  return (
    <>
      <div className="section wizebot-section-padding bg-light">
        <div className="container">
          <div className="wizebot-section-title wizebot-two-column-title">
            <div className="row">
              <div className="col-lg-8">
                <h2>Integration with dozens of tools</h2>
              </div>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="wizebot-title-btn">
                  <Link className="wizebot-default-btn pill" href="Integrations">
                    <span>Browse all Integrations</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wizebot-video-column">
            <div className="row">
              <div className="col-lg-6">
                <div className="wizebot-video-wrap">
                  <Image src="/images/v3/video-bg.png" alt="Video Background" width={600} height={400} />
                  <button
                    className="video-init wizebot-review-video"
                    onClick={openPopup}
                  >
                    <Image src="/images/v3/play-btn.svg" alt="Play Button" width={80} height={80} />
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="wizebot-testimonial-content">
                  <ul>
                    <li>
                      <Image src="/images/v3/star.png" alt="Rating Star" width={24} height={24} />
                    </li>
                    <li>
                      <Image src="/images/v3/star.png" alt="Rating Star" width={24} height={24} />
                    </li>
                    <li>
                      <Image src="/images/v3/star.png" alt="Rating Star" width={24} height={24} />
                    </li>
                    <li>
                      <Image src="/images/v3/star.png" alt="Rating Star" width={24} height={24} />
                    </li>
                    <li>
                      <Image src="/images/v3/star.png" alt="Rating Star" width={24} height={24} />
                    </li>
                  </ul>
                  <p>
                    "Our team's productivity grow up after implementing this
                    SaaS tool. The intuitive interface & seamless collaboration
                    features made a significant impact on our workflow.
                    Game-changer for our company efficiency!"
                  </p>
                  <div className="wizebot-testimonial-authors-wraps">
                    <div className="wizebot-testimonial-authors">
                      <p>Jonas Aly</p>
                      <span>Founder @ Sitemark</span>
                    </div>
                    <div className="wizebot-testimonial-author-logo">
                      <Image src="/images/v2/b_v2_5.png" alt="Company Logo" width={120} height={40} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`popup-video ${popup ? "popup" : "popdown"}`}
          onClick={() => setPopup(false)}
        >
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              className="video"
              src="https://www.youtube.com/embed/SixdAQtWJQ8?si=iDeCVOUMxo5bqmy9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <button className="close-button">
              <IoClose className="close-icon" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`popup-video ${popup ? "popup" : "popdown"}`}
        onClick={closePopup}
      >
        <div className="video-wrapper">
          <iframe
            id="youtube-video"
            className="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SixdAQtWJQ8?si=TPxjQ04JgcZ5eEA9"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <button className="close-button" onClick={closePopup}>
            <IoClose className="close-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default IntegrationsectionTwo;
