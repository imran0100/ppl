import React, { useState } from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img
            onClick={() => navigate("/")}
            className="link-item"
            src={logo}
            alt="logo"
          />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/" className="link-item">
              HOME
            </Link>
            <Link to="/faq" className="link-item">
              FAQ
            </Link>
            <Link to="/contact" className="link-item">
              CONTACT US
            </Link>

            {localStorage.getItem("user_322") ? (
              <Link to="/dashboard" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            ) : (
              <Link to="/login" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            )}
            {!localStorage.getItem("user_322") && (
              <Link to="/signup" className="link-item">
                REGISTER
              </Link>
            )}
          </div>
        </nav>
      </div>
      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG"></div>
          <div className="responsive-container-block container">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead"></p>
                <div className="responsive-container-block">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt"
                  >
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input
                      className="input"
                      id="ijowk"
                      name="FirstName"
                      placeholder="Please enter first name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      className="input"
                      id="indfi"
                      name="Last Name"
                      placeholder="Please enter last name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      className="input"
                      id="ipmgh"
                      name="Email"
                      placeholder="Please enter email..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      className="input"
                      id="imgis"
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                    />
                  </div>
                  <div
                    style={{ width: "59%" }}
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i"
                  >
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                    ></textarea>
                  </div>
                </div>
                <button className="submit-btn">Submit</button>
              </div>
              {/* <div className="social-media-links">
                <a href="#" id="ix94i-2">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  />
                </a>
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  />
                </a>
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  />
                </a>
                <a href="#" id="izldf-2">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  />
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
