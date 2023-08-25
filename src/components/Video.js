import React, { useState, useEffect } from "react";
import "./VideoBackground.css"; // Import your CSS file if you have one

const Video = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".col-1");
      const section2Top = section2Right.offsetTop;
      const windowTop = window.scrollY + window.innerHeight;

      if (windowTop > section2Top) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pricingData = [
    {
      title: "Basic",
      pricing: "99",
      discount: "Save $9",
      features: ["One account", "Unlimited songs", "Customized playlist"],
    },
    {
      title: "Pro",
      pricing: "129",
      discount: "Save $15",
      features: ["One account", "Unlimited songs", "Customized playlist"],
    },
    {
      title: "Ultimate",
      pricing: "149",
      discount: "Save $25",
      features: ["Six accounts", "Unlimited songs", "Customized playlist"],
    },
  ];
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline // For iOS to prevent fullscreen playback
      >
        <source src="/pexels_videos_2658998 (1080p).mp4" type="video/mp4" />
        {/* Add additional sources for other video formats if needed */}
      </video>
      {/* Add other content, such as your main content */}
      <div className="content">
        <div className="main">
          <div className="container">
            <div className={`grid ${shouldAnimate ? "active" : ""}`}>
              {pricingData.map((pricingItem, index) => (
                <div className="card" key={index}>
                  <h2 className="card_title">{pricingItem.title}</h2>
                  <p className="pricing">
                    <span style={{ fontSize: "3rem" }}>$</span>
                    {pricingItem.pricing}
                    <span className="small">/per month</span>
                  </p>
                  <p>{pricingItem.discount}</p>
                  <hr />
                  <ul className="features">
                    {pricingItem.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <a className="cta_btn">Buy Now</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
