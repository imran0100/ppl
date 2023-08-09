import React from "react";
import "./PricingTable2.css";
const PricingTable2 = () => {
  const pricingData = [
    {
      title: "Basic",
      price: "$19",
      features: [
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
      ],
    },
    {
      title: "Pro",
      price: "$29",
      features: [
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
      ],
    },
    {
      title: "Ultimate",
      price: "$39",
      features: [
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor.",
      ],
    },
  ];

  return (
    <div className="wrapper">
      {pricingData.map((data, index) => (
        <div key={index} className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">{data.title}</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>{data.price}</h1>
            </div>
            <ul>
              {data.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable2;
