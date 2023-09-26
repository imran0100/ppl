import React, { useState } from "react";
import "./ChooseForUiChange.css"; // Import your CSS file for styling
import image1 from "../logo/Screenshot 2023-09-25 114449.png";
import image2 from "../logo/Screenshot 2023-09-25 114827.png";
import image3 from "../logo/Screenshot 2023-09-25 114900.png";
import image4 from "../logo/Screenshot 2023-09-25 115058.png";
import image5 from "../logo/Screenshot 2023-09-25 115212.png";
import image6 from "../logo/Screenshot 2023-09-25 115314.png";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import ChangeHomePageContent from "./ChangeHomePageContent";
function ChooseForUiChange() {
  const [isOpen, setIsOpen] = useState(false);
  const [homeEdit, setHomeEdit] = useState(false);
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

      <div className="fullscreen-grid">
        <div className="row1">
          <div className="image">
            <img
              src={image1}
              alt="Image 1"
              onClick={() => setHomeEdit(!homeEdit)}
            />
          </div>
          <div className="image">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="image">
            <img src={image3} alt="Image 3" />
          </div>
        </div>
        <div className="row1">
          <div className="image">
            <img src={image6} alt="Image 4" />
          </div>
          <div className="image">
            <img src={image4} alt="Image 5" />
          </div>
          <div className="image">
            <img src={image5} alt="Image 6" />
          </div>
        </div>
      </div>
      {homeEdit && <ChangeHomePageContent />}
    </>
  );
}

export default ChooseForUiChange;
