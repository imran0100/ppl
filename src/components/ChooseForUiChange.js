import React, { useState } from "react";
import "./ChooseForUiChange.css"; // Import your CSS file for styling

import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import ChangeHomePageContent from "./ChangeHomePageContent";
import ChangeBookTableContent from "./ChangeBookTableContent";
import ChangeAboutDatabase from "./ChangeAboutDatabase";
import ChangePricingPage from "./ChangePricingPage";
import ChangeWhatsDifferentPage from "./ChangeWhatsDifferentPage";
import ChangeAmazingFeature from "./ChangeAmazingFeature";
function ChooseForUiChange() {
  const [isOpen, setIsOpen] = useState(false);
  // const [homeEdit, setHomeEdit] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  return (
    <>
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img className="link-item" src={logo} alt="logo" />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/admin" className="link-item">
              Admin Dashboard
            </Link>
            <Link to="/choose" className="link-item">
              Add Question
            </Link>
            <Link to="/chooseEdit" className="link-item">
              Edit Question
            </Link>
            <Link to="/seeprogress" className="link-item">
              Students Progress
            </Link>

            <a className="link-item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </nav>
      </div>

      <ChangeHomePageContent />
      <ChangeBookTableContent />
      <ChangeAboutDatabase />
      <ChangePricingPage />
      <ChangeWhatsDifferentPage />
      <ChangeAmazingFeature />
    </>
  );
}

export default ChooseForUiChange;
