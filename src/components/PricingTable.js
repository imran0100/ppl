import React from "react";
import "./PricingTable.css";
const PricingTable = () => {
  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-price">
              <div className="price-header">
                <h3 className="title">Basic</h3>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>{" "}
                  <span className="amount">
                    19.<span>99</span>
                  </span>{" "}
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="deals">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
              <a href="#">Get Started</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-price">
              <div className="price-header">
                <h3 className="title">Pro</h3>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>{" "}
                  <span className="amount">
                    39.<span>99</span>
                  </span>{" "}
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="deals">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
              <a href="#">Get Started</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-price">
              <div className="price-header">
                <h3 className="title">Ultimate</h3>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>{" "}
                  <span className="amount">
                    99.<span>99</span>
                  </span>{" "}
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="deals">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
