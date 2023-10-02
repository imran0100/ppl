import React, { useState, useEffect } from "react";
import "./VideoBackground.css"; // Import your CSS file if you have one
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Video = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.48.26.232:5000/api/v1/get_allbasic_price"
        );
        console.log(response.data.data, "dahsihdia");
        setData(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 error here
          console.error("Data not found on the server.");
        } else {
          // Handle other errors
          console.error("Error fetching data:", error.message);
        }
      }
    };

    fetchData();
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

  const checkout = async (plan) => {
    const existingData = JSON.parse(localStorage.getItem("user_322"));

    if (existingData) {
      setIsProcessing(true);
      // const url = "http://localhost:5000/api/v1/create-subscription-checkout";
      const url =
        "http://13.48.26.232:5000/api/v1/create_subscription_checkout";
      const headers = {
        "Content-Type": "application/json",
      };
      const data = { customerId: 5, plan: plan };

      try {
        const res = await axios.post(url, data, { headers, mode: "cors" });

        if (res.ok) res.json();

        const { session } = res.data;
        console.log(res.data.data.url);
        console.log(session, "ygughycvgcg");
        // console.log(session.url);
        window.location = res.data.data.url;

        const updatedData = { ...existingData, sessionId: res.data.data.id };
        localStorage.setItem("user_322", JSON.stringify(updatedData));
        // window.location = session.url;
      } catch (e) {
        console.log(e.error);
      } finally {
        // Reset loading state
      }
      console.log("fkasfklasas");
    } else navigate("/login");
  };

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
              {data.map((pricingItem, index) => (
                <div className="card" key={index}>
                  <h2 className="card_title">{pricingItem.title}</h2>
                  <p className="pricing">
                    <span style={{ fontSize: "3rem" }}>£</span>
                    {pricingItem.pricing}
                    <span className="small">/per month</span>
                  </p>
                  <p>{pricingItem.discount}</p>
                  <hr />
                  <ul className="features">
                    {pricingItem.feature.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    className="cta_btn"
                    onClick={() => checkout(Number(pricingItem.pricing))}
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isProcessing && (
        <div className="blur-overlay">
          <div className="loader">
            {/* For example, you can display a loading spinner */}
            <div className="spinner">
              <h1 style={{ color: "white" }}>Please wait...</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
