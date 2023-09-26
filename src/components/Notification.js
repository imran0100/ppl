import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function Notification() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://13.48.26.232:5000/api/v1/getAllnotification";
    // const apiUrl = "https://jsonplaceholder.typicode.com/users";
    // Use Axios to make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Assuming the API returns an array of notifications
        setNotifications(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(notifications);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
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
      {notifications.map((notification) => (
        <div key={notification.id}>{notification.description}</div>
      ))}
    </div>
  );
}

export default Notification;
